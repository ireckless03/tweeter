$(document).ready(function () {
  $("#tweet-text").on("input",function () {
    let maxChar = 140;
    $(".counter").val(maxChar - this.value.length);
    if (this.value.length > 140) {
        $(".counter").addClass("red-counter");
    } else {
        $(".counter").removeClass("red-counter");
    }
});
});