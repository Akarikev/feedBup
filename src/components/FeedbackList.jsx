import React from "react";
import FeedbackItem from "./FeedbackItem";
import propTypes from "prop-types";

function FeedbackList({ feedback, handleDelete }) {
  // console.log(feedback);

  if (!feedback || feedback.length === 0) {
    return <p>No feedback</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      text: propTypes.string,
      rating: propTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
