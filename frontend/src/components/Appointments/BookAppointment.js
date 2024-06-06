import React, { useState } from 'react';
import api from '../../services/api';

const BookAppointment = () => {
  const [doctorId, setDoctorId] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');

  const handleBook = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      await api.post('/appointments', { doctorId, date, time, reason }, {
        headers: {
          'x-access-token': token,
        },
      });
      alert('Appointment booked');
    } catch (error) {
      console.error(error);
      alert('Booking failed');
    }
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleBook}>
        <div>
          <label>Doctor ID</label>
          <input type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} />
        </div>
        <div>
          <label>Date</label>
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div>
          <label>Time</label>
          <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
        </div>
        <div>
          <label>Reason</label>
          <input type="text" value={reason} onChange={(e) => setReason(e.target.value)} />
        </div>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookAppointment;
