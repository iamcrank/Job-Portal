import React, { useEffect, useState } from 'react'
import Banner from '../Components/Banner'
import Jobs from './Jobs';
import Card from '../Components/Card';
import Sidebar from '../SideBar/Sidebar';
import NewsLetter from '../Components/NewsLetter';
import NavJobs from '../Components/NavJob';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [jobs, setjobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentpage, setCurrentPage] = useState(1);
  const [query, setQuery] = useState('');
  const itemsPerpage = 6;

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:3000/all-jobs").then(res => res.json()).then(data => {
      setjobs(data);
      setIsLoading(false);
    });
  }, []);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  //radio filtering
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // button filtering
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  //filter jobs by title
  const filteredItems = jobs.filter((job) => job.jobTitle.toLowerCase().includes(query.toLowerCase()));

  //calculate the index range
  const calculatePagerange = () => {
    const startIndex = (currentpage - 1) * itemsPerpage;
    const endIndex = startIndex + itemsPerpage;
    return { startIndex, endIndex };
  }

  // function for the next page 
  const nextPage = () => {
    if (currentpage < Math.ceil(filteredItems.length / itemsPerpage)) {
      setCurrentPage(currentpage + 1);
    }
  };
  // function for the previous page
  const prevPage = () => {
    if (currentpage > 1) {
      setCurrentPage(currentpage - 1);
    }
  };
  //main function
  const filteredData = () => {
    let filteredJobs = filteredItems;
    // filtering input items
    if (query) {
      filteredJobs = filteredItems;
    }
    //category filtering 
    if (selectedCategory) {
      filteredJobs = filteredJobs.filter(({ jobLocation, maxPrice, experienceLevel, salaryType, employmentType, postingDate }) => {
        return (
          jobLocation.toLowerCase() === selectedCategory.toLowerCase() ||
          parseInt(maxPrice) <= parseInt(selectedCategory) ||
          postingDate >= selectedCategory ||
          salaryType.toLowerCase() === selectedCategory.toLowerCase() ||
          employmentType.toLowerCase() === selectedCategory.toLowerCase() ||
          experienceLevel.toLowerCase() === selectedCategory.toLowerCase()
        );
      });
    }
    // slice the data based on curent page 
    const { startIndex, endIndex } = calculatePagerange();
    filteredJobs = filteredJobs.slice(startIndex, endIndex)
    return filteredJobs.map((data, i) => <Card key={i} data={data} />)
  }

  const result = filteredData(jobs, selectedCategory, query);
  return (
    <div>
      <NavJobs/>
      <Banner query={query} handleInputChange={handleInputChange} />
      {/*main content*/}
      <div className='bg-[#fafafa] md:grid grid-cols-4 gap-8 lg:px-24 py-12'>
        {/*left side */}
        <div className='bg-white p-4 rounded'>
          <Sidebar handleChange={handleChange} handleClick={handleClick} />
        </div>
        {/*Main content*/}
        <div className='col-span-2 bg-white p-4 rounded'>
          {
            isLoading ? (<p className='font-medium'>Loading...</p>) : result.length > 0 ? (<Jobs result={result} />) : <>

              <p>No Data Found</p>
            </>
          }
          {/*pagination*/}
          {
            result.length > 0 ? (
              <div className='flex jusitfy-center mt-4 space-x-2'>
                <button onClick={prevPage} disabled={currentpage === 1} className='hover:underline'>Previous</button>
                <span className='mx-2'>Page {currentpage} of {Math.ceil(filteredItems.length / itemsPerpage)}</span>
                <button onClick={nextPage} disabled={currentpage === Math.ceil(filteredItems.length / itemsPerpage)} className='hover:underline'>Next</button>
              </div>
            ) : ""
          }
        </div>
        {/*right side */}
        <div className='bg-white p-4 rounded'>
          <NewsLetter />
        </div>
      </div>
    </div>
  )
}

export default Home