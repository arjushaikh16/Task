import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profiles: [],
};

const profilesSlice = createSlice({
  name: 'profiles',
  initialState,
  reducers: {
    setProfiles: (state, action) => {
      state.profiles = action.payload;
    },
    addProfile: (state, action) => {
      state.profiles.push(action.payload);
    },
    editProfile: (state, action) => {
      const index = state.profiles.findIndex(profile => profile.id === action.payload.id);
      state.profiles[index] = action.payload;
    },
    deleteProfile: (state, action) => {
      state.profiles = state.profiles.filter(profile => profile.id !== action.payload);
    },
  },
});

export const { setProfiles, addProfile, editProfile, deleteProfile } = profilesSlice.actions;
export default profilesSlice.reducer;