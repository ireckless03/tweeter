$(document).ready(function () {
  $('#tweet-button').on('submit', (event) => {
    event.preventDefault();
    const formData = $('#tweet-text').serialize();
    $.ajax({
      url: "/tweets",
      type: "POST",
      data: formData,
    });
  });
}) ;


