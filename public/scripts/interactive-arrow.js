// made Write A Tweet header to focus on the tweet submission box
// if user is somewhere else on screen it should bring them back to the submission box
$(document).ready(function() {
  $('.write-a-tweet').click(function() {
    let $tweetForm = $("#tweet-form");
    let tweetFormHeight = $tweetForm.outerHeight();
    let viewportHeight = $(window).height();
    let scrollTop = $tweetForm.offset().top - (viewportHeight - tweetFormHeight) / 2;
    
    $('html, body').animate({
      scrollTop: scrollTop
    }, 1000, function() {
      $("#tweet-text").focus();
    });
  });
});
