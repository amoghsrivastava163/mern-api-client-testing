import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Reviews = () => {
  const { productId } = useParams();

  const [reviews, setReviews] =
    useState([]);

  const [reviewerName,
    setReviewerName] = useState("");

  const [rating,
    setRating] = useState(5);

  const [comment,
    setComment] = useState("");

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    const res = await axios.get(
      `http://localhost:5000/api/reviews/${productId}`
    );

    setReviews(res.data);
  };

  const submitReview = async () => {
    await axios.post(
      "http://localhost:5000/api/reviews",
      {
        productId,
        reviewerName,
        rating,
        comment,
      }
    );

    setReviewerName("");
    setRating(5);
    setComment("");

    fetchReviews();
  };

  const deleteReview = async (
    id
  ) => {
    await axios.delete(
      `http://localhost:5000/api/reviews/${id}`
    );

    fetchReviews();
  };

  const avgRating =
    reviews.length > 0
      ? (
          reviews.reduce(
            (acc, review) =>
              acc + review.rating,
            0
          ) / reviews.length
        ).toFixed(1)
      : 0;

  return (
    <div className="container">
      <h1>
        Product Reviews
      </h1>

      <h2>
        ⭐ Average Rating:
        {avgRating}/5
      </h2>

      <input
        type="text"
        placeholder="Your Name"
        value={reviewerName}
        onChange={(e) =>
          setReviewerName(
            e.target.value
          )
        }
      />

      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) =>
          setRating(
            Number(
              e.target.value
            )
          )
        }
      />

      <textarea
        placeholder="Comment"
        value={comment}
        onChange={(e) =>
          setComment(
            e.target.value
          )
        }
      />

      <button
        className="primary-btn"
        onClick={submitReview}
      >
        Submit Review
      </button>

      <br />
      <br />

      {reviews.map((review) => (
        <div
          key={review._id}
          className="order-card"
        >
          <h3>
            {review.reviewerName}
          </h3>

          <p>
            ⭐ {review.rating}/5
          </p>

          <p>
            {review.comment}
          </p>

          <button
            className="delete-btn"
            onClick={() =>
              deleteReview(
                review._id
              )
            }
          >
            Delete Review
          </button>
        </div>
      ))}
    </div>
  );
};

export default Reviews;