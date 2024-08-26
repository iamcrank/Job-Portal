import React from 'react'
import Location from './Location'
import Salary from './Salary'
import JobPostingData from './JobPostingData'
import WorkExperience from './WorkExperience'
import Employmenttype from './Employmenttype'

const Sidebar = ({ handleChange, handleClick }) => {

  return (
    <div className='space-y-5'>
      <h3 className='text-primary text-base font-bold mb-2'>Filters</h3>
      <Location handleChange={handleChange} />
      <Salary handleChange={handleChange} handleClick={handleClick} />
      <JobPostingData handleChange={handleChange} />
      <WorkExperience handleChange={handleChange} />
      <Employmenttype handleChange={handleChange} />
    </div>
  )
}

export default Sidebar