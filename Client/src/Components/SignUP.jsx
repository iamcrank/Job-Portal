import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {  login ,loginStart, loginSuccess, loginFailure } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';
import {doSignInWithGoogle} from '../firebase/auth'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('job-seeker');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mock signup logic with role handling
    dispatch(login({ user: { email }, role }));
    navigate('/role-selection');
  };

  const onGoogleSignIn = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const user = await doSignInWithGoogle();
      dispatch(loginSuccess(user));
      alert('Sign up successful!');
      navigate('/role-selection');
    } catch (err) {
      dispatch(loginFailure(err.message));
      alert('Sign up failed. Please try again.');
    }
  };

  return (
    <div className='flex item-center justify-center '>
       <div className='space-y-12 flex item-center justify-center px-30 py-5'>
      <form onSubmit={handleSubmit} className='w-96 block px-5 py-2 bg-[#fafafa]'>
      <h2 className='  text-semibold text-lg  '>Signup</h2>
      <div class="col-span-full py-3 ">
      <label class="block text-sm font-medium leading-6 text-gray-900">Email</label>
      <input type="email" value={email} className='w-full py-2 px-2 rounded-md placholder:text-sm ' onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      </div>
      <div class="col-span-full py-3 ">
      <label class="block text-sm font-medium leading-6 text-gray-900">Password</label>
      <input type="password" value={password} className='w-full py-2 px-2 rounded-md placholder:text-sm ' onChange={(e) => setPassword(e.target.value)} placeholder="Password" required />
      </div>
      <div class="col-span-full py-3 px-2 flex item-center justify-start gap-5 ">
      <button type="submit" className='bg-[#0C359E] text-white text-semibold text-lg px-2 rounded-sm '>Signup</button>
      <p>or</p>
      <button onClick={onGoogleSignIn}><img src="\images\google-logo-9834.png" alt="" className='sign-img'/></button>
      </div>
       
      </form>
       </div>
    </div>
  );
};

export default Signup;


