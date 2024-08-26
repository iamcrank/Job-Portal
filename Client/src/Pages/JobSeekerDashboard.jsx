import React from 'react';
import { useEffect } from 'react';
import NavJob from '../Components/NavJob';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAppliedJobs } from '../store/jobseeker/jobSeekerSlice';
import { useAuth } from '../contexts/authcontexts/AuthContext';
//import NewsLetter from '../Components/NewsLetter';
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6'

const JobSeekerDashboard = () => {
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const appliedJobs = useSelector((state) => state.jobSeeker.appliedJobs);

  useEffect(() => {
    if (currentUser) {
      dispatch(fetchAppliedJobs(currentUser.uid));
    }
  }, [dispatch, currentUser]);
  return (
    <div>
      <NavJob/>
      <div className='mx-w-screen-2xl  mx-auto xl:px-24 px-4 flex justify-center item-center gap-2  bg-[#f7fafc] rounded'>
      <div>
      <h1 className="text-4xl mb-4 font-semibold pl-10 pt-10 text-[#0C359E]">Empower Your Future:<br/>with JobHere</h1>
      <h2 className='w-3/4 pl-10 py-10'>
      Welcome to the place where your dreams take shape and your hard work finds its reward.
      Here, every click, every application, and every opportunity is a step closer to your career goals.
      Believe in your potential, stay persistent, and let this dashboard be your companion in the journey to success.
      You have the power to create your own path—let's make it happen together!
      </h2>
      <a href="/home" className='border bg-[#0C359E] rounded-sm text-white cursor-pointer font-semibold ml-10 px-2 py-2 ' >Find Job</a>
       </div>
       <div className='flex justify-center item-center gap-8 px-4 py-10 bg-[#bad4f5] rounded mt-10'>
      <div>
        <h3 className='text-md font-bold mb-2 flex items-center gap-2'>
          <FaEnvelopeOpenText /> Stay Informed with Our Newsletter
        </h3>
        <p className='text-primary/75 text-base mb-4'>
        Don't miss out on the latest job openings, career advice, and industry trends. 
        Subscribe to our newsletter and get valuable insights delivered straight to your inbox.
        </p>
        <div className='w-full space-y-4'>
          <input type="email" name='email' id='email' placeholder='name@mail.com' className='w-full block py-2 pl-3 border focus:outline-none' />
          <input type="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border bg-[#0C359E] rounded-sm text-white cursor-pointer font-semibold' />
        </div>

      </div>
      <div >
        <h3 className='text-md font-bold mb-2 flex items-center gap-2'>
          <FaRocket /> Boost Your Chances: Upload Your Resume
        </h3>
        <p className='text-primary/75 text-base mb-4'>
        Take the first step towards landing your dream job by uploading your resume today.
         A well-crafted resume is your ticket to showcasing your skills and experience to potential employers. 
        </p>
        <div className='w-full space-y-4'>
          <input type="submit" value={"Upload your Resume"} className='w-full block py-2 pl-3 border bg-[#0C359E] rounded-sm text-white cursor-pointer font-semibold' />
        </div>

      </div>
        </div>
      </div>
     
    </div>
  );
};

export default JobSeekerDashboard;
