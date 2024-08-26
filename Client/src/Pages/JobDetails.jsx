import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import PageHeader from "../Components/PageHeader";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`http://localhost:3000/all-jobs/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setJob(data);
      } catch (error) {
        setError(error);
      }
    };

    fetchJob();
  }, [id]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

 

  return (
    <div className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <PageHeader title={"Job Details"} path={"Job Details"} />
      <div className='py-10 px-10 shadow-sm'>
      {job.companyLogo && <img src={job.companyLogo} alt={`${job.companyName} logo`} className='card-img' />}
      <h2 className='py-1'>Job Details: {id}</h2>
      <h1 className='py-1'>{job.jobTitle}</h1>
      <h3 className='py-1'>{job.companyName}</h3>
      <h3 className='py-1'>{job.minPrice}</h3>
      <h3 className='py-1'>{job.maxPrice}</h3>
      <h3 className='py-1'>{job.jobLocation}</h3>
      <h3 className='py-1'>{job.employmentType}</h3>
      <h3 className='py-1'>{job.postingDate}</h3>
      <p className='py-1'>{job.description}</p>
      <a href="/apply-job" className='bg-blue py-1 px-3 text-white font-medium rounded-sm'>Apply Now</a>
      </div>
      
    </div>
  );
};

export default JobDetails;
