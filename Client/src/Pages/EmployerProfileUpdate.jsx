
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../store/jobseeker/jobSeekerSlice';
import { useAuth } from '../contexts/authcontexts/AuthContext';
import NavEmployer from '../Components/NavEmployer';

const EmployerProfileUpdate = () => {
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    resume: '',
    contactDetails: '',
  });

  const handleChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfile({ ...profileData, userId: currentUser.uid }));
  };

  return (
    <div>
      <NavEmployer/>
      <div className='mx-w-screen-2xl  mx-auto xl:px-24 px-4'>
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={profileData.name} onChange={handleChange} placeholder="Name" />
        <input type="email" name="email" value={profileData.email} onChange={handleChange} placeholder="Email" />
        <input type="text" name="resume" value={profileData.resume} onChange={handleChange} placeholder="Resume URL" />
        <input type="text" name="contactDetails" value={profileData.contactDetails} onChange={handleChange} placeholder="Contact Details" />
        <button type="submit">Update Profile</button>
      </form>
      </div>
    </div>
  );
};

export default EmployerProfileUpdate;
