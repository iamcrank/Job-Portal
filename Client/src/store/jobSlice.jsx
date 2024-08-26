// src/features/jobs/jobSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchJobs = createAsyncThunk('jobs/fetchJobs', async () => {
  const response = await fetch('http://localhost:3000/all-jobs');
  return response.json();
});

export const postJob = createAsyncThunk('jobs/postJob', async (jobData) => {
  const response = await fetch('http://localhost:3000/post-job', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(jobData),
  });
  return response.json();
});

const jobSlice = createSlice({
  name: 'jobs',
  initialState: {
    jobs: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(postJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      });
  },
});

export default jobSlice.reducer;
