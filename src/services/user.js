import axiosInstance from "../interceptor/axiosInstance";

export const getUserDashboard = async () => {
  const response = await axiosInstance.get("dashboard?userId=1");
  return response.data[0];
};

export const getUserProfile = async () => {
  const response = await axiosInstance.get("users/1");
  return response.data;
};
