export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return `${time.substr(0, 5) + time.slice(-2)} | ${d.toLocaleDateString()}`;
}

export function formatTweet(tweet, author, authedUser, parentTweet) {
  const { id, likes, replies, text, timestamp } = tweet;
  const { name, avatarURL } = author;

  return {
    name,
    id,
    timestamp,
    text,
    avatar: avatarURL,
    likes: likes.length,
    replies: replies.length,
    hasLiked: likes.includes(authedUser),
    parent: !parentTweet
      ? null
      : {
          author: parentTweet.author,
          id: parentTweet.id,
        },
  };
}

export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatAsDateTime(ts) {
  const pad = (n, s = 2) => `${new Array(s).fill(0)}${n}`.slice(-s);
  const d = new Date(ts);

  return `${pad(d.getFullYear(), 4)}-${pad(d.getMonth() + 1)}-${pad(
    d.getDate()
  )} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

export function capitalizeFirstLetter(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
