import React from "react";
import propTypes from "prop-types";
function FeedbackStats({ feedback }) {
  //cal ratings average

  let average =
    feedback.reduce((acc, cur) => {
      return acc + cur.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, "");
  return (
    <div className="feedback-stats">
      <h4>
        {feedback.length}{" "}
        {`${
          feedback.length === 1 || feedback.length === 0 ? "Review" : "Reviews"
        }`}
      </h4>

      <h4>Average Rating : {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: propTypes.array.isRequired,
};

export default FeedbackStats;
