import {ADD_TWEET_STARTED} from "../constants/action-types";
export * from './sessionActions';


export function addTweet(tweet) {
    return {
        type: ADD_TWEET_STARTED,
        payload: tweet
    };
}