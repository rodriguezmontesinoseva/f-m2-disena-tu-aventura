'use strict';

const createLinkTweet = urlBack => {
  const cardLinkEl = document.querySelector('.card-link');
  cardLinkEl.href = urlBack;
  cardLinkEl.innerHTML = urlBack;

  const cardLinkTweetEl = document.querySelector('.twitter-share-button');
  cardLinkTweetEl.href = cardLinkTweetEl.href + urlBack;
}
