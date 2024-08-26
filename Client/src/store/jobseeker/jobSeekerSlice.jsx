import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch applied jobs
export const fetchAppliedJobs = createAsyncThunk('jobSeeker/fetchAppliedJobs', async (userId) => {
  const response = await fetch(`http://localhost:3000/applied-jobs/${userId}`);
  return response.json();
});

// Fetch profile
export const fetchProfile = createAsyncThunk('jobSeeker/fetchProfile', async (email) => {
  const response = await fetch(`http://localhost:3000/profile-update/${email}`);
  return response.json();
});

// Update profile
export const updateProfile = createAsyncThunk('jobSeeker/updateProfile', async (profileData) => {
  const formData = new FormData();
  formData.append('name', profileData.name);
  formData.append('email', profileData.email);
  formData.append('resume', profileData.resume);
  formData.append('contactDetails', profileData.contactDetails);

  const response = await fetch(`http://localhost:3000/profile-update`, {
    method: 'POST',
    body: formData,
  });
  return response.json();
});

// Apply for job
export const applyForJob = createAsyncThunk('jobSeeker/applyForJob', async (applicationData) => {
  const formData = new FormData();
  formData.append('resume', applicationData.resume);
  formData.append('coverLetter', applicationData.coverLetter);
  formData.append('jobId', applicationData.jobId);
  formData.append('userId', applicationData.userId);
  formData.append('fullName', applicationData.fullName);
  formData.append('email', applicationData.email);

  const response = await fetch(`http://localhost:3000/apply-job`, {
    method: 'POST',
    body: formData,
  });
  return response.json();
});

const jobSeekerSlice = createSlice({
  name: 'jobSeeker',
  initialState: {
    appliedJobs: [],
    profile: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppliedJobs.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAppliedJobs.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.appliedJobs = action.payload;
      })
      .addCase(fetchAppliedJobs.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(fetchProfile.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.profile = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateProfile.fulfilled, (state, action) => {
        state.profile = action.payload;
      })
      .addCase(applyForJob.fulfilled, (state, action) => {
        state.appliedJobs.push(action.payload);
      });
  },
});

export default jobSeekerSlice.reducer;
