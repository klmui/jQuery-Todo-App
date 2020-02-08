// Check off specific todos by clicking
$("li").click(function(){
    $(this).toggleClass("completed");
});

// Click on X to delete Todo
$("span").click(function(event) {
    // this is the span
    $(this).parent().fadeOut(function(){
        // remove entire li
        $(this).remove(); // Refers to li, not the span
    }); 
    event.stopPropagation(); // jQuery that will prevent event from bubbling up
});