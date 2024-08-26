// src/components/JobApplicationForm.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyForJob } from '../store/jobseeker/jobSeekerSlice';
import { useAuth } from '../contexts/authcontexts/AuthContext';
import NavJobs from '../Components/NavJob';
import Swal from 'sweetalert2';

const JobApplicationForm = ({ jobId }) => {
  const dispatch = useDispatch();
  const { currentUser } = useAuth();
  const [applicationData, setApplicationData] = useState({
    resume: '',
    coverLetter: '',
  });

  const handleChange = (e) => {
    setApplicationData({ ...applicationData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setApplicationData({
      ...profile,
      resume: e.target.files[0],
    });
  };

  const handleApply = async () => {
    e.preventDefault();
    dispatch(applyForJob({ ...applicationData, jobId, userId: currentUser.uid }));
    Swal.fire({
      title: "thank you applied is successfully",
      showCloseButton: true,
      icon: "success",
    
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__slower
        `
      }
    });
  };


  

  return (
    <div>
       <NavJobs/>
     <div className='space-y-12 flex item-center justify-center px-10 py-5'>
     <form onSubmit={handleApply} className='block px-5 py-2 bg-[#fafafa]'>
     <h2 className='text-medium font-semibold'>Apply for Job</h2>
     <div class="col-span-full py-2">
     <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Full Name</label>
     <input type="text" name="resume"   placeholder='Full Name' className='w-full py-2'/>
     </div>
     <div class="col-span-full py-2">
     <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
     <input type="email" name='email' placeholder='youremail@mail.com' className='w-full py-2' />
     </div>
     <div class="col-span-full py-2">
     <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Upload Resume</label>
     <input type='file' name='resume'  onChange={handleFileChange} className='w-full px-3 py-2 border rounded' required/>
     </div>
     <div class="col-span-full py-2">
     <label for="about" class="block text-sm font-medium leading-6 text-gray-900">Cover Letter</label>
     <textarea name="coverLetter" value={applicationData.coverLetter} onChange={handleChange} placeholder="Cover Letter" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
     </div>
     <button type="submit"  class="text-sm font-semibold leading-6 text-[#012345] bg-indigo-600 rounded py-1 px-4">Apply</button>
      </form>
     </div>
    </div>
  );
};

export default JobApplicationForm;
