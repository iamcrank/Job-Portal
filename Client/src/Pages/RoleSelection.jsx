import React from 'react';
import { useDispatch } from 'react-redux';
import { setRole } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import Nav from '../Components/Nav'

const RoleSelection = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRoleSelect = (role) => {
    dispatch(setRole(role));
    if (role === 'job-seeker') {
      navigate('/job-seeker-dashboard');
    } else if (role === 'employer') {
      navigate('/employer-dashboard');
    }
  };

  return (
    <div>
      <Nav/>
      <div className='container-md  px-24 py-8 '>
      <h2 className='text-center text-lg font-semibold py-4 text-[#0C359E]'>Choose Your Path: Define Your Role in the Job Portal</h2>
      <p className='text-base font-small text-center'>Welcome to the gateway of your career journey! Whether you're seeking to discover top talent as an employer or aiming to land your dream job as a job seeker, 
        this is the first step towards a brighter future. 
        Select your role to unlock tailored features and opportunities designed to meet your unique needs. 
        Let's embark on this journey together and achieve great success!</p>
        <div className="flex item-center justify-center gap-8 py-20">
        <button onClick={() => handleRoleSelect('job-seeker')} className='py-8 px-8 border border-[#0c359e] rounded-sm text-[#0C359E] font-semibold hover:bg-[#0c359e] hover:text-white'>Job Seeker</button>
        <button onClick={() => handleRoleSelect('employer')}  className='py-8 px-8 bg-[#0C359E]  border rounded-sm text-white font-semibold hover:border-[#0c359e] hover:text-[#0C359E] hover:bg-transparent'>Employer</button>
        </div>

      </div>
      
    </div>
  );
};

export default RoleSelection;
