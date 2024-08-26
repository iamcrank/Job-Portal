import React, { useState } from 'react'
import { NavLink} from 'react-router-dom';
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";

const NavJob = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen)
  };
  const navItems = [
    { path: "/job-seeker-dashboard", title: "Home" },
    { path: "/home", title: "Search" },
    { path: "/salary", title: "Salary" },
    { path: "/job-seeker-profile", title: "Profile" },
    {path:"", title:""}
    
  ]
  return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
      <nav className='flex justify-between items-center py-6'>
        <a href='/'className='flex justify-center items-center' ><img src="/images/logo.png" alt="Logo" className="logoimg" /><h1 className='h1'>Jobhere</h1></a>
        {/**nav items for large screen*/}
        <ul className='hidden md:flex gap-12'>
          {
            navItems.map(({
              path, title
            }) => (
              <li key={path} className='text-base text-primary
            '>
                <NavLink
                  to={path}
                  className={({ isActive }) => isActive ? "active" : ""}>
                  {title}
                </NavLink>
              </li>
            ))
          }
        </ul>
      
        {/*mobile menu*/}
        <div className='md:hidden block'>
          <button onClick={handleMenuToggler}>
            {
              isMenuOpen ? <FaXmark className='w-5 h-5 text-[#0C359E]' /> : <FaBarsStaggered className='w-5 h-5 text-[#0C359E]' />
            }

          </button>
        </div>

      </nav>
      {/*navitems for mobile*/}
      <div className={`px-4 bg-[#f4f4f3] py-5 rounded-sm ${isMenuOpen ? "" : "hidden"}`}>
        <ul>
          {
            navItems.map(({
              path, title
            }) => (
              <li key={path} className='text-base text-black first:text-black py-5
            '>
                <NavLink
                  to={path}
                  className={({ isActive }) => isActive ? "active" : ""}>
                  {title}
                </NavLink>
              </li>
            ))
          }
     
        </ul>
      </div>
    </header>
  )
}

export default NavJob;

   //<a href='/login' className='py-2 px-3 border rounded text-[#0C359E] mr-5'>Login</a>
  // <a href='/signup' className='bg-[#0C359E] py-2 px-3 border rounded text-white'>Signup</a>