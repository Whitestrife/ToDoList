$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("span:first").on("click", function(event){
        $("input").fadeToggle();
});

$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

$("input[type = 'text']").on("keypress", function(event){
    if(event.which === 13){
        var text = $("input[type = 'text']").val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + text + "</li>");
    }
});
