import React from 'react';
import Nav from '../Components/Nav'

const LandingPage = () => {
  return (
    <div>
      <Nav/>
      <div className="container mx-auto p-4 text-center mt-10">
      <h1 className="text-4xl mb-4 text-[#0C359E]">Your Future Starts Here - Discover Opportunities, Transform Careers</h1>
      <p className="text-xl mb-8">Welcome to JobHere, where your career aspirations come to life.
         We understand that finding the right job can be a transformative experience,
          and we're dedicated to making that journey as smooth and rewarding as possible.  
         JobHere promises a seamless, supportive, and efficient job search experience. 
        Trust in JobHere to guide you towards a future filled with promise and success.</p>
      <div className='text-base text-primary font-medium space-x-5 hidden lg:block'>
          <a href='/login' className='py-2 px-5 border rounded'>Login</a>
          <a href='/signup' className='py-2 px-5 border rounded bg-[#0C359E] text-white'>Signup</a>
        </div>
      </div>
      
    </div>
  );
};

export default LandingPage;
