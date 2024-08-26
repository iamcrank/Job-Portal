import React, { useState } from 'react';
import { useLoaderData, useParams} from 'react-router-dom'
import { useForm } from "react-hook-form";
import CreatableSelect from "react-select/creatable";
import NavEmployer from '../Components/NavEmployer'

const EditPage = () => {
  const {id} = useParams();
  //console.log(id)
  const { _id, jobTitle, companyName, minPrice, maxPrice, salaryType, jobLocation, postingDate,experiencelevel,companyLogo, employmentType, description, postedBy, skills} = useLoaderData()

  const [selectedOption, setSelectedOption] = useState(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    data.skills = selectedOption;

    //console.log(data)
    fetch(`http://localhost:3000/edit-job/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    }).then(res => res.json()).then((result) => {
      console.log(result)
      if (result.acknowledged === true) {
        alert("job updated Successfully!")
      }
      reset()
    })
  };

  const options = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "C++", label: "C++" },
    { value: "HTML", label: "HTML" },
    { value: "CSS", label: "CSS" },
    { value: "React", label: "React" },
    { value: "Node", label: "Node" },
    { value: "Mango DB", label: "Mango DB" },
  ]



  return (
    <div className='max-w-screen-2-xl container mx-auto xl:px-24 px-4'>
      <NavEmployer/>
    {/*form*/}
    <div className='bg-[#fafafa] px-10 py-10 '>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/*first row*/}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 py-2 '>
          <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-md'>Job Title</label>
            <input type="text" defaultValue={jobTitle} {...register("jobTitle")} className='create-job-input' />
          </div>
          <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-md'>Company Name</label>
            <input type="text" placeholder='Ex: Microsoft'defaultValue={companyName}{...register("companyName")} className='create-job-input' />
          </div>
        </div>
        {/*secondrow*/}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 py-2'>
          <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-md'>Minimum Salary</label>
            <input type="text" placeholder='$20k'defaultValue={minPrice} {...register("minPrice")} className='create-job-input' />
          </div>
          <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-md'>Maximum Salary</label>
            <input type="text" placeholder='$120k' defaultValue={maxPrice}{...register("maxPrice")} className='create-job-input' />
          </div>
        </div>
        {/*third drow*/}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 py-2'>
          <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-md'>Salary Type </label>
            <select {...register("salaryType")} className='create-job-input'>
              <option value={salaryType}>{salaryType}</option>
              <option value="Hourly">Hourly</option>
              <option value="Monthly">Monthly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
          <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-md'>Job Location</label>
            <input type="text" placeholder='Ex:New York' defaultValue={jobLocation}{...register("jobLocation")} className='create-job-input' />
          </div>
        </div>
        {/*fourth row*/}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 py-2'>
          <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-md'>Job Posting Date</label>
            <input type="date" placeholder='Ex 2024-01-01' defaultValue={postingDate}{...register("postingDate")} className='create-job-input' />
          </div>
          <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-md'>Experience Level </label>
            <select {...register("experienceLevel")} className='create-job-input'>
              <option value={experiencelevel}>{experiencelevel}</option>
              <option value="Freshers">Freshers</option>
              <option value="Internship">Internship</option>
              <option value="Work temporarly">Work temporarly</option>
            </select>
          </div>

        </div>
        {/*fifth row*/}
        <div>
          <label className='block mb-2 text-md'>Required Skills Sets</label>
          <CreatableSelect defaultValue={skills} onChange={setSelectedOption} options={options} isMulti className='create-job-input' />
        </div>
        {/*Sixth row*/}
        <div className='flex flex-col lg:flex-row items-center justify-between gap-8 py-2'>
          <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-md'>company logo</label>
            <input type="url" placeholder='Paste your company logo URL '{...register("companyLogo")} className='create-job-input' />
          </div>
          <div className='lg:w-1/2 w-full'>
            <label className='block mb-2 text-md'>Employment Type</label>
            <select {...register("employmentType")} className='create-job-input'>
              <option value={employmentType}>{employmentType}</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Temporary">Temporary</option>
            </select>
          </div>

        </div>
        {/*Seventh row*/}
        <div className='w-full'>
          <label className='block mb-2 text-md'>Job Description</label>
          <textarea rows={6} placeholder='Job Description' defaultValue={description}{...register("description")} className='w-full pl-3 py-1.5 focus:outline-none placeholder:text-gray-400'></textarea>
        </div>
        {/*Eighth row*/}
        <div className='w-full'>
          <label className='block mb-2 text-md'>Job Posted By</label>
          <input type="email" placeholder='your email' defaultValue={postedBy}{...register("postedBy")} className='create-job-input' />
        </div>


        <input type="submit" className='block mt-12 bg-blue text-white font-semibold px-2 py-1  rounded-sm cursor-pointer' />
      </form>
    </div>
  </div>
  )
}

export default EditPage