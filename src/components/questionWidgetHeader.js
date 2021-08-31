import React from "react";
import PropTypes from "prop-types";

export function QuestionWidgetHeader(props) {
  return (
    <div style={{ marginBottom: "12px", marginTop: "0px" }}>
      <h2 style={{ marginBottom: "0px" }}>Would you rather?</h2>
      {props.dateCreated && <div>{props.dateCreated}</div>}
    </div>
  );
}

QuestionWidgetHeader.propTypes = {
  dateCreated: PropTypes.string,
};
