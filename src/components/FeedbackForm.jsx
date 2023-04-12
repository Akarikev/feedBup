import { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";

function FeedbackForm() {
  const [text, setText] = useState("");

  const handleTextChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
  };
  return (
    <Card>
      <form>
        <h2>How would you rate your service with us ?</h2>
        {/* @todo - rating select */}
        <div className="input-group">
          <input
            type="text"
            autoComplete="true"
            autoCorrect="true"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" version="primary">
            Send Review
          </Button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
