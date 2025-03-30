import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Setting from "./pages/Setting";
import Dashboard from "./pages/Dashboard";
import { fetchDashboardData } from "./store/dashboardSlice";
import Layout from "./components/UI/Layout";
import SpinnerLoading from "./components/Spinner";

const App = () => {
  const { user, loading } = useSelector((state) => state.dashboard);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchDashboardData());
  }, [dispatch]);

  if (!user || loading) return <SpinnerLoading />;
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout user={user} />}>
          <Route index element={<Dashboard />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
