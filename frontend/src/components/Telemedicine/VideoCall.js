import React, { useState } from 'react';
import api from '../../services/api';

const VideoCall = () => {
  const [doctorId, setDoctorId] = useState('');
  const [callUrl, setCallUrl] = useState('');

  const handleStartCall = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await api.post('/video/start', { doctorId }, {
        headers: {
          'x-access-token': token,
        },
      });
      setCallUrl(response.data.url);
    } catch (error) {
      console.error(error);
      alert('Failed to start video call');
    }
  };

  return (
    <div>
      <h2>Start Video Call</h2>
      <form onSubmit={handleStartCall}>
        <div>
          <label>Doctor ID</label>
          <input type="text" value={doctorId} onChange={(e) => setDoctorId(e.target.value)} />
        </div>
        <button type="submit">Start Call</button>
      </form>
      {callUrl && (
        <div>
          <h3>Video Call Link</h3>
          <a href={callUrl} target="_blank" rel="noopener noreferrer">{callUrl}</a>
        </div>
      )}
    </div>
  );
};

export default VideoCall;
