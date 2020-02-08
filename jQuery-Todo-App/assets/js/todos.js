// Check off specific todos by clicking

// Target all li inside of ul
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("ul").on("click", "span", function(event) {
    // this is the span
    $(this).parent().fadeOut(function(){
        // remove entire li
        $(this).remove(); // Refers to li, not the span
    }); 
    event.stopPropagation(); // jQuery that will prevent event from bubbling up
});

// .keypress runs on any keypressed, not just enter
$("input[type='text']").keypress(function(event){
    // Check for enter key
    if(event.which === 13) {
        var todoText = $(this).val();
        $(this).val("");
        // Create a new li and add to ul
        $("ul").append("<li><span>X</span> "+ todoText +"</li>");
    }
});