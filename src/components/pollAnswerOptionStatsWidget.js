import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import { capitalizeFirstLetter } from "../utils/helpers";
import { useSelector } from "react-redux";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export function PollAnswerOptionStatsWidget(props) {
  const { answerText, totalVotes, users } = props;
  const percentage = users.length ? (totalVotes / users.length) * 100 : 0;

  const session = useSelector((state) => state.session);
  const showSelectedAnswerIcon =
    props.users.findIndex((x) => x === session.user.id) >= 0;

  return (
    <Card variant={"outlined"}>
      <CardHeader
        title={
          <>
            <span>{capitalizeFirstLetter(answerText)}&nbsp;&nbsp;</span>
            {showSelectedAnswerIcon && <CheckCircleIcon />}
          </>
        }
      />
      <CardContent>
        {users.length} of {totalVotes} Votes ({percentage.toFixed(2)} %){" "}
      </CardContent>
    </Card>
  );
}

PollAnswerOptionStatsWidget.propTypes = {
  answerText: PropTypes.string.isRequired,
  users: PropTypes.array.isRequired,
  totalVotes: PropTypes.number.isRequired,
};

export default PollAnswerOptionStatsWidget;
