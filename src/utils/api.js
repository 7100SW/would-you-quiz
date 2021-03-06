/* eslint-disable */

import {
  _getQuestions,
  _getUsers,
  _loginUser,
  _saveQuestion,
  _saveQuestionAnswer,
} from "./_DATA.js";

export function getInitialData() {
  return Promise.all([getQuestions(), getUsers()]).then(
    ([questions, users]) => {
      const usersAnswer = {};

      Object.keys(users).map((u) => {
        for (const key in users[u].answers) {
          const target = usersAnswer[key];
          if (!target) {
            usersAnswer[key] = {
              optionOne: [],
              optionTwo: [],
            };
          }

          const ans = users[u].answers[key];
          if (ans === "optionOne") {
            const target = usersAnswer[key];
            if (!target.optionOne.find((x) => x === u)) {
              target.optionOne.push(u);
            }
          } else {
            const target = usersAnswer[key];
            if (!target.optionTwo.find((x) => x === u)) {
              target.optionTwo.push(u);
            }
          }
        }
      });

      return {
        questions,
        answers: usersAnswer,
        users,
      };
    }
  );
}

export function loginUser(userId, pwd) {
  return _loginUser(userId, pwd);
}

export function getUsers() {
  return _getUsers();
}

export function getQuestions() {
  return _getQuestions();
}

export function createQuestion(author, optionOneText, optionTwoText) {
  return _saveQuestion({
    author: author,
    optionOneText,
    optionTwoText,
  });
}

export function addUserAnswer(question, user, answer) {
  return _saveQuestionAnswer({
    authedUser: user,
    qid: question,
    answer: answer,
  });
}
