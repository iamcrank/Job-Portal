import React, { useState } from 'react';
import { useAuth } from '../contexts/authcontexts/AuthContext';
import NavEmployer from '../Components/NavEmployer';

const EmployerProfile = () => {
  const { currentUser } = useAuth();
  const [profile, setProfile] = useState({
    companyName: '',
    email: currentUser.email,
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({
      ...profile,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(profile);
  };

  return (
    
    <div className='max-w-screen-2-xl container mx-auto xl:px-24 px-4'>
      <NavEmployer/>
      <div  className='container mx-auto p-4'>
      <h2 className='text-2xl mb-4'>Employer Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label className='block text-gray-700'>Company Name</label>
          <input
            type='text'
            name='companyName'
            value={profile.companyName}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Email</label>
          <input
            type='email'
            name='email'
            value={profile.email}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            disabled
          />
        </div>
        <div className='mb-4'>
          <label className='block text-gray-700'>Contact</label>
          <input
            type='text'
            name='contact'
            value={profile.contact}
            onChange={handleChange}
            className='w-full px-3 py-2 border rounded'
            required
          />
        </div>
        <button type='submit' className='bg-[#0C359E] text-white py-2 px-4 rounded'>
          Save Profile
        </button>
      </form>
      </div>
    </div>
  );
};

export default EmployerProfile;
