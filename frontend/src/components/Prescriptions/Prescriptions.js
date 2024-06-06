import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const Prescriptions = () => {
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    const fetchPrescriptions = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await api.get('/prescriptions', {
          headers: {
            'x-access-token': token,
          },
        });
        setPrescriptions(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPrescriptions();
  }, []);

  return (
    <div>
      <h2>Prescriptions</h2>
      <ul>
        {prescriptions.map((prescription) => (
          <li key={prescription._id}>
            {prescription.medication} - {prescription.dosage}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Prescriptions;
