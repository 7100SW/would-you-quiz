import React from "react";
import PropTypes from "prop-types";

function PollAnswerWidgetHeader(props) {
  return (
    <div style={{ marginBottom: "12px", marginTop: "0px" }}>
      <h2 style={{ marginBottom: "0px" }}>
        {"Asked By: " + props.author.name}
      </h2>
      {props.dateCreated && <div>{props.dateCreated}</div>}
    </div>
  );
}

PollAnswerWidgetHeader.propTypes = {
  author: PropTypes.object.isRequired,
  dateCreated: PropTypes.string,
};

export default PollAnswerWidgetHeader;
