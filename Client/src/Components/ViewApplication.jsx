import React, { useEffect, useState } from 'react';
import { useAuth } from '../contexts/authcontexts/AuthContext';
import NavEmployer from '../Components/NavEmployer';

const ViewApplication = () => {
  const { currentUser } = useAuth();
  const [applications, setApplications] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (currentUser) {
      fetch(`http://localhost:3000/applications/${currentUser._id}`)
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => setApplications(data))
        .catch((err) => setError(err.message));
    }
  }, [currentUser]);

  return (
    <div>
      <NavEmployer/>
      <h2>Employer Dashboard</h2>
      <h3>Job Applications</h3>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {applications.map((application) => (
          <li key={application._id}>
            <p>{application.coverLetter}</p>
            <p>{application.resume}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewApplication;
