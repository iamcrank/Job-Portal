import { configureStore } from '@reduxjs/toolkit';
import authReducer from './store/authSlice';
import jobReducer from './store/jobSlice';
import applicationReducer from   './store/applicationSlice';
import jobSeekerReducer from './store/jobseeker/jobSeekerSlice';

const store = configureStore({
  reducer: {
    jobs: jobReducer,
    applications: applicationReducer,
    auth: authReducer,
    jobSeeker: jobSeekerReducer,
  },
});
export default store;


//  jobs: jobReducer,
//applications: applicationReducer,
//jobSeeker: jobSeekerReducer,
