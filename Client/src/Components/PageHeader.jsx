import React from 'react'

const PageHeader = ({title, path}) => {
  return (
    <div className='py-24 mt-2 bg-[#caf4ff4f] rounded flex items-center justify-center'>
      <div>
        <h2 className='text-2xl text-[#0C359E] font-medium mb-1 text-center'>{title}</h2>
        <p className='text-sm text-center'><a href="/">Home</a> / {path} </p>
      </div>
    </div>
  )
}

export default PageHeader