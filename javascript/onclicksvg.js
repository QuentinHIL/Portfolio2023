$('svg').on("click", function() {
    $('svg.selected').attr("class", "");
    $(this).attr("class", "selected");
});