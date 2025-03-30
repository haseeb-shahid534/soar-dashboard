import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserDashboard, getUserProfile } from "../services/user";

export const fetchDashboardData = createAsyncThunk(
  "dashboard/fetchDashboardData",
  async () => {
    const user = await getUserProfile();
    const dashboardData = await getUserDashboard();
    return {
      user,
      dashboardData,
    };
  }
);

const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    user: null,
    dashboardData: null,
    loading: true,
  },
  reducers: {
    updateUserProfile: (state, action) => {
      state.user = {
        ...state.user,
        ...action.payload,
        address: {
          ...state.user.address,
          ...action.payload.address,
        },
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDashboardData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDashboardData.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.dashboardData = action.payload.dashboardData;
        state.loading = false;
      });
  },
});

export const { updateUserProfile } = dashboardSlice.actions;
export default dashboardSlice.reducer;
