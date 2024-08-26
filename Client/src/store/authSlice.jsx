// src/store/authSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { doSignInWithEmailAndPassword,  doSignInWithGoogle } from '../firebase/auth';

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }) => {
    const userCredential = await doSignInWithEmailAndPassword(email, password);
    return 
     // Replace with actual role fetching logic
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    role: null,
  },
  reducers: {
    login(state, action) {
      state.user = action.payload.user;
      state.role = action.payload.role;
    },
    loginStart(state) {
      state.loading = true;
    },
    loginSuccess(state, action) {
      state.loading = false;
      state.user = action.payload;
      state.userLoggedIn = true;
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logout(state) {
      state.user = null;
      state.role = null;
    },
    setRole(state, action) {
      state.role = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.role = action.payload.role;
    });
  },
});

export const { login, logout, setRole,loginStart, loginSuccess, loginFailure } = authSlice.actions;
export default authSlice.reducer;
