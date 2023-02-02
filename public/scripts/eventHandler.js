$(() => {
  $('#tweet-button').on('submit', (event) => {
    alert('hello')
    event.preventDefault();
    console.log($('#tweet-text').val())
  });
})