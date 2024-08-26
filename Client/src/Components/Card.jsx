import React from 'react'
import { FiCalendar, FiClock, FiDollarSign, FiMapPin } from "react-icons/fi"

const Card = ({ data }) => {
  const { _id, companyName, companyLogo, jobTitle, minPrice, maxPrice, jobLocation, employmentType, postingDate, description } = data;
  return (
    <section className='card'>
      <a href={`/job/${_id}`} className='flex gap-4 flex-col sm:flex-row items-start'>
        <img src={companyLogo} alt="" className='card-img' />
        <div>
          <h4 className='text-primary mb-1'>{companyName}</h4>
          <h3 className='text-md font-semibold mb-1'>{jobTitle}</h3>
          <div className='text-primary/70 text-base flex flex-wrap gap-1 mb-2'>
            <span className='flex items-center gap-1'> <FiMapPin />{jobLocation}</span>
            <span className='flex items-center gap-1'> <FiClock />{employmentType}</span>
            <span className='flex items-center gap-1'> <FiDollarSign />{minPrice}-{maxPrice}k</span>
            <span className='flex items-center gap-1'> <FiCalendar />{postingDate}</span>
          </div>
          <p className='text-primary/70 text-base'>{description}</p>
        </div>
      </a>
    </section>
  )
}

export default Card