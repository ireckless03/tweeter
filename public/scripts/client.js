/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 * 
 * 
 * 
 * IN Tweet Object
 * OUT: return $tweet to the caller
 */

// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

function formatDaysAgo(timestamp) {
  const now = Date.now();
  const diff = now - timestamp;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days > 1) {
  return `${days} day ago`
} else {
  return `1 day ago`
}

}



const createTweetElement = (tweetData) => {
  const $tweet = `    
  <article class="tweet">
  <header>
    <span>
      <img src=${tweetData.user.avatars}/>
      <h3>${tweetData.user.name}</h3>
    </span>
    <span class="username">
      <h3>${tweetData.user.handle}</h3>
    </span>
  </header>
  <section>
    <p>${tweetData.content.text}</p>
  </section>
  <footer>
    <div>
      <span>${formatDaysAgo(tweetData.created_at)}</span>
    </div>
    <div>
    <socials>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
    </socials>
  </div>
  </footer>
</article>`

return $tweet
}


const $tweet = createTweetElement(tweetData);


// Test / driver code (temporary)
//console.log('the tweet -------------',$tweet); // to see what it looks like
// to add it to the page so we can make sure it's got all the right elements, classes, etc.


$(document).ready(function () {
$('.tweet-container').append($tweet);
})