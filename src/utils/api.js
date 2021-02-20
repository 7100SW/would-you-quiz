import { _loginUser, _getUsers } from "./_DATA.js";

// export function getInitialData () {
//   return Promise.all([
//     _getUsers(),
//     _getTweets(),
//   ]).then(([users, tweets]) => ({
//     users,
//     tweets,
//   }))
// }
//
// export function saveLikeToggle (info) {
//   return _saveLikeToggle(info)
// }
//
// export function saveTweet (info) {
//   return _saveTweet(info)
// }

export function loginUser(userId, pwd) {
  return _loginUser(userId, pwd);
}

export function getUsers() {
  return _getUsers();
}
