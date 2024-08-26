import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from 'react-icons/fa6'

const NewsLetter = () => {
  return (
    <div>
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
      <div className='mt-20'>
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
  )
}

export default NewsLetter