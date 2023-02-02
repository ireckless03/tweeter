$(document).ready(function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    const tweet = $('#tweet-text').val().length;
    if (!tweet) {
      window.alert("Input field empty!");
    } else if (tweet > 140) {
      window.alert("Are you writing a book? Wrong platform please reduce the amount of characters!");
    } else {
      const formData = $(this).serialize();
      $.ajax({
        url: "/tweets",
        type: "POST",
        data: formData,
      });
    }
  });
});


