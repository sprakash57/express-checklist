$(document).ready(function(){

    //Deleting To-do with fade effect
    $("ul").on("click","span",function(event){
        event.stopPropagation();
        $(this).parent().fadeOut(500,function(){
            $(this).remove();
            
        });
    });

    //Text-input
    $("input[type='text']").keypress(function(event){
        if(event.which === 13){
            var todoText = $(this).val();
            $(this).val("");
            $("ul").append("<li><span><i class='fas fa-eraser'></i></span> "+todoText+"</li>");

        }
    });

    //Strike through effect after note is completed
    $("ul").on("click","li",function(){
        $(this).toggleClass("completed");
    });

    $(".fa-pencil-alt").click(function(){
        $("input[type='text']").fadeToggle();
    });
});