import React, { useState } from 'react';
import axios from 'axios';

const Inputform = () => {
  const [comment, setComment] = useState();

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.post('http://localhost:3001/comments', {
        comment: comment,
      });
      console.log('Comment saved:', response.data);
      setComment('');
    } catch (error) {
      console.error('Error saving comment:', error);
    }
  };

  return (
    <div>
      <h2>Input Form</h2>
      <textarea
        value={comment}
        onChange={handleInputChange}
        placeholder="Enter comment..."
        rows="4"
        cols="50"
      />
      <br />
      <button onClick={handleSaveClick}>Save</button>
    </div>
  );
};

export default Inputform;


