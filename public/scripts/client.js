/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 *
 *
 *
 * 
 */

$(document).ready(function () {
  // function to turn unix time stamp into time since

  function formatDaysAgo(timestamp) {
    const now = Date.now();
    const diff = now - timestamp;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days > 1) {
      return `${days} day ago`;
    } else {
      return `1 day ago`;
    }
  }

  // takes in the tweet object and appends it to the tweets container
  const createTweetElement = (tweetData) => {
    const $tweet = `    
      <article class="tweet">
      <header>
        <span>
          <img class='tweet-icon' src=${tweetData.user.avatars}/>
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
    </article>`;

    return $tweet;
  };

  // loops through all the tweets and appends to the tweets container
  const renderTweets = function (tweets) {
    for (const twit of tweets) {
      const $tweet = createTweetElement(twit);
      $(".tweet-container").append($tweet);
    }
  };
// takes tweets from database and posts on the page
  const loadTweets = () => {
    $.ajax("/tweets", {
      dataType: "JSON",
      type: "GET",
    }).then((tweets) => {
      renderTweets(tweets);
    });
  };
  
  $('form').on('submit', function(event){
    loadTweets();
  })
  loadTweets();
});
