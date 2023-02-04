$(document).ready(function () {
  $("#tweet-text").on("input",function () {
    const MAX_CHAR = 140;
    $(".counter").val(MAX_CHAR - this.value.length);
    if (this.value.length > 140) {
        $(".counter").addClass("red-counter");
    } else {
        $(".counter").removeClass("red-counter");
    }
});
});

