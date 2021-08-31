import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { capitalizeFirstLetter } from "../utils/helpers";

export function PollAnswerOptionStatsWidget(props) {
  const { answerText, totalVotes, users } = props;
  const percentage = users.length ? (totalVotes / users.length) * 100 : 0;

  return (
    <Card>
      <CardHeader title={capitalizeFirstLetter(answerText)} />
      <CardContent>
        {users.length} of {totalVotes} Votes ({percentage.toFixed(2)} %)
      </CardContent>
    </Card>
  );
}

PollAnswerOptionStatsWidget.propTypes = {
  answerText: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
  totalVotes: PropTypes.number.isRequired,
};
