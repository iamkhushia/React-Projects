

import { useState } from "react";
import "./Comment.css";

const Comment = () => {
  const [input, setInput] = useState({
    username: "",
    comment: "",
    review: 0,
  });

  const [reviews, setReviews] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleStarClick = (rating) => {
    setInput({
      ...input,
      review: rating,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      input.username === "" ||
      input.comment === "" ||
      input.review === 0
    ) {
      alert("Please fill all this fields.!!");
      return;
    }

    setReviews([...reviews, input]);
    setInput({ username: "", comment: "", review: 0 });
  };

  return (
    <>
      <h2>Comment & Review</h2>
      <div className="container">
        <div className="image-container">
          <img
            src="https://tse3.mm.bing.net/th?id=OIP.b_wjxp8nezBS7blYR9n8VQHaE8&pid=Api&P=0&h=180"
          />
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit}>
            <label>UserName:</label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="username"
              value={input.username}
              onChange={handleChange}
            />

            <label>Comment:</label>
            <textarea
              name="comment"
              placeholder="Enter Your Feedback!!.."
              value={input.comment}
              onChange={handleChange}
            />

            <label>Review:</label>
            <div className="star-rating">
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={star <= input.review ? "star selected" : "star"}
                  onClick={() => handleStarClick(star)}
                >
                  ★
                </span>
              ))}
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <h2 className="data">User Reviews</h2>
      <div className="review-container">
        {reviews.length > 0 ? (
          <div className="review-grid">
            {reviews.map((review, index) => (
              <div className="review" key={index}>
                <h4>{review.username}</h4>
                <p>{review.comment}</p>
                <div className="star-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={star <= review.review ? "star selected" : "star"}
                    >
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <h5>No reviews yet. </h5>
        )}
      </div>
    </>
  );
};

export default Comment;
