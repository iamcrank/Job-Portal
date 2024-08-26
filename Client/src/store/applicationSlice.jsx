
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchApplications = createAsyncThunk('applications/fetchApplications', async (jobId) => {
  const response = await fetch(`http://localhost:3000/applications/${jobId}`);
  return response.json();
});

const applicationSlice = createSlice({
  name: 'applications',
  initialState: {
    applications: [],
    status: 'idle',
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchApplications.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchApplications.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.applications = action.payload;
      })
      .addCase(fetchApplications.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default applicationSlice.reducer;
