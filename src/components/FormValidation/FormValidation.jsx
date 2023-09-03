/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import styles from "../FormValidation/FormValidation.module.css";

const FormValidation = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [openFeedback, setOpenFeedback] = useState(false);
  const [comment, setComment] = useState("");
  const [error, setError] = useState("")
  const [data, setData] = useState(null);

  const submitHandler = () => {
    if (!rating) {
      setError("Please select a rating")
      return;
    }
    if (name.length < 2 || name.length > 15) {
      setError("Name should be between 2 and 15 characters");
      return;
    }
    if (!comment) {
      setError("Please provide a comment");
      return;
    }

    const feedback = {
      rating, name, comment
    };

    setData(feedback);
    setRating("");
    setName("");
    setComment("");
    setError("");
    setOpenFeedback(false)
  };

  const okHandler = () => {
    setData(null);
    setOpenFeedback(false);
  }

  return (
    <div className={styles.backImg}>
      <h1>Maker's Mark</h1>
      <p>Bourbon Whiskey</p>
      <img className={styles.img} src='https://i0.wp.com/liquorgenie.in/wp-content/uploads/2020/09/Makers-Mark.jpg?fit=2000%2C2000&ssl=1' alt="Maker's Mark whiskey"></img><br />
      <button onClick={() => { setOpenFeedback(true) }} className={styles.fbtn}>Leave Feedback</button>

      {openFeedback && (
        <div className={styles.popupBox}>
          <button onClick={okHandler} className={styles.close}>+</button>
          <h2>Feedback Comment</h2>
          <div className={styles.rating}>
            <label htmlFor="rating">Rating</label>
            <select id="rating" onChange={(e) => { setRating(e.target.value) }} value={rating}>
              <option value='' disabled>Select Rating</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
          <div className={styles.name}>
            <label htmlFor="name">Your Name</label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className={styles.comment}>
            <label htmlFor="comment">Comment</label>
            <textarea id="comment" onChange={(e) => setComment(e.target.value)} value={comment}></textarea>
          </div>
          {error && <p className={styles.error}>{error}</p>}
          <button onClick={() => { submitHandler() }}>Submit</button>
        </div>
      )}
      {data && (
        <div className={styles.popupBox}>
          <h2>Thank You for your feedback!</h2>
          <p>Rating: {data.rating}</p>
          <p>Name: {data.name}</p>
          <p>Comment: {data.comment}</p>
          <button onClick={okHandler}>OK</button>
        </div>
      )}
    </div>
  )
};

export default FormValidation;