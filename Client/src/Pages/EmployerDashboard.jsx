// src/Pages/EmployerDashboard.jsx
import React from 'react';
import NavEmployer from '../Components/NavEmployer';
const EmployerDashboard = () => {

  return (
    <div className='max-w-screen-2-xl container mx-auto xl:px-24 px-4'>
      <NavEmployer/>
      <div className='flex justify-center item-center gap-2 rounded'>
        <div>
        <h1  className="text-4xl mb-4 font-semibold pl-10 pt-10 text-[#0C359E]">Discover Talent, Drive Success</h1>
        <p className='w-3/4 pl-10 py-5'>Transform your organization with top-tier talent that fits seamlessly into your vision. Our platform is designed to connect you with skilled professionals who are ready to contribute and grow within your company. From posting job listings to evaluating candidates, we provide a comprehensive and efficient recruitment solution. Trust us to help you find the right people who will drive your business forward and ensure your success in today’s competitive market.</p>
      <a href="/post-job" className='border bg-[#0C359E] rounded-sm text-white cursor-pointer font-semibold ml-10  px-2 py-2 '>Post New Job</a>
        </div>
      </div>
   
    </div>
  );
};

export default EmployerDashboard;
