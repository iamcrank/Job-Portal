// src/components/ProfileUpdate.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateProfile } from '../store/jobseeker/jobSeekerSlice';
import { useAuth } from '../contexts/authcontexts/AuthContext';
import NavJob from '../Components/NavJob';

const ProfileUpdate = () => {
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
      <NavJob/>
      <div className='mx-w-screen-2xl  mx-auto xl:px-24 px-4'>
        <div className='w-2/4 bg-[#fafafa]  flex item-center justify-center px-30 py-5'>
        <form onSubmit={handleSubmit} className='w-96 block px-5 py-2 bg-[#fafafa]'>
        <h2 className='  text-semibold text-lg  '>Update Profile</h2>
        <div class="col-span-full py-3 ">
        <label class="block text-sm font-medium leading-6 text-gray-900">Name</label>
        <input type="text" name="name" value={profileData.name} onChange={handleChange} placeholder="Name" className='w-full py-2 px-2 rounded-md placholder:text-sm '/>
        </div>
        <div class="col-span-full py-3 ">
        <label class="block text-sm font-medium leading-6 text-gray-900">Email</label>
        <input type="email" name="email" value={profileData.email} onChange={handleChange} placeholder="Email" className='w-full py-2 px-2 rounded-md placholder:text-sm '/>
        </div>
        <div class="col-span-full py-3 ">
        <label class="block text-sm font-medium leading-6 text-gray-900">Phone No.</label>
        <input type="tel" name='phone' value={profileData.phone} onChange={handleChange} placeholder='Phone' className='w-full py-2 px-2 rounded-md placholder:text-sm '   />
        </div>
        <div class="col-span-full py-3 ">
        <label class="block text-sm font-medium leading-6 text-gray-900">Upload Resume</label>
        <input type="file" name="resume" value={profileData.resume} onChange={handleChange} />
        </div>
        <div class="col-span-full py-3 ">
        <button type="submit"  className='bg-[#0C359E] text-white text-semibold text-lg px-2 rounded-sm '>Update Profile</button>
        </div>
      </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpdate;
