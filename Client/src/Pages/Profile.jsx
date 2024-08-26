
import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/authcontexts/AuthContext';

const Profile = () => {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch(`/user-profile/${currentUser.email}`);
        const data = await response.json();
        setProfile(data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    fetchProfile();
  }, [currentUser]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/user-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(profile),
      });

      if (!response.ok) {
        throw new Error('Failed to update profile');
      }

      alert('Profile updated successfully');
    } catch (error) {
      console.error('Failed to update profile:', error);
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={profile.name || ''} onChange={handleChange} placeholder="Name" required />
        <input type="text" name="contact" value={profile.contact || ''} onChange={handleChange} placeholder="Contact" required />
        {currentUser.role === 'job_seeker' && (
          <input type="file" name="resume" onChange={handleChange} placeholder="Upload Resume" />
        )}
        {currentUser.role === 'employer' && (
          <input type="text" name="company" value={profile.company || ''} onChange={handleChange} placeholder="Company" required />
        )}
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
};

export default Profile;
