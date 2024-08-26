import React, { useEffect, useState } from 'react'
import NavJob from '../Components/NavJob'
const SalaryEstimate = () => {
  const [search, setSearch] = useState('');
  const [salary, setSalary] = useState([]);

  useEffect(() => {
    fetch("salary.json").then(res => res.json()).then(data => setSalary(data))
  }, []);

  const handleSearch = () => {
    const filter = salary.filter((job) => job.title.toLowerCase().indexOf(search.toLowerCase()) !== -1);
    console.log(filter);
    setSalary(filter);
  };
  return (
    <div>
      <NavJob/>
      <div className='mx-w-screen-2xl  mx-auto xl:px-24 px-4'>
      <div className='mt-5'>
        <div className='search-box p-2 text-center mb-2'>
          <input type="text" name='search' id='search' className='py-2 pl-3 border focus:outline-none lg:w-6/12 mb-4 w-full' onChange={(e) => setSearch(e.target.value)} />
          <button className='bg-[#0C359E] text-white font-medium px-8 py-2 rounded-sm mb-4' onClick={handleSearch}>Search</button>
        </div>

      </div>
      {/*salary display card*/}
      <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 my-12 items-center'>
       {
        salary.map((data) => (
          <div key={data.id} className='shadow px-4 py-8'>
            <h4 className='font-medium text-xl'>{data.title}</h4>
            <p className='my-2 font-small text-[#0C359E] text-lg'>{data.salary}</p>
            <div className='flex flex-wrap gap-4'>
              <a href="/" className='underline'>{data.status}</a>
              <a href="/" className='underline'>{data.skills}</a>
            </div>
          </div>
        ))
       }
      </div>

      </div>
     
      
    </div>
  )
}

export default SalaryEstimate