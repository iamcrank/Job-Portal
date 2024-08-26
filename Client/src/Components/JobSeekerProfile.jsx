import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../contexts/authcontexts/AuthContext';
import NavJob from './NavJob';
import { fetchProfile } from '../store/jobseeker/jobSeekerSlice';

const JobSeekerProfile = () => {
  const { currentUser } = useAuth();
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.jobSeeker.profile);

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchProfile(currentUser.email));
    }
  }, [currentUser, dispatch]);

  return (
    <div className='mx-auto p-4'>
      <NavJob />
      <div className='bg-[#f5f5f5]'>
      <div className='container px-4 py-10 bg-[#bad4f5] rounded mt-10'>
        <h2 className='text-2xl mb-4'>Job Seeker Profile</h2>
        {profile ? (
          <div>
            <p><strong>Name:</strong> {profile.name}</p>
            <p><strong>Email:</strong> {profile.email}</p>
            <p><strong>Contact:</strong> {profile.phone}</p>
            <p><strong>Resume:</strong> <a href={profile.resume} target='_blank'>View Resume</a></p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <a href="/profile-update"  className='bg-[#0C359E] text-white text-semibold text-lg px-2 rounded-sm '>Edit Profile</a>
      </div>
    </div>
  );
};

export default JobSeekerProfile;
