import React, { useState } from 'react';
import api from '../../services/api';

const Feedback = () => {
  const [doctorId, setDoctorId] = useState('');
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await api.post('/feedback', { doctorId, rating, comment }, {
        headers: {
          'x-access-token': token,
        },
      });
      alert('Feedback submitted');
    } catch (error) {
      console.error(error);
      alert('Submission failed');
    }
  };

  return (
    <div>
      <h2>Submit Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Doctor ID</label>
          <input type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} />
        </div>
        <div>
          <label>Rating</label>
          <select value={rating} onChange={(e) => setRating(e.target.value)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <div>
          <label>Comment</label>
          <textarea value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Feedback;
