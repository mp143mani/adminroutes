import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Adduser from './components/Adduser';
import Profile from './components/Profile';
import PendingRequest from './components/PendingRequest';
import Task from './components/Task';
import ProfileDetails from './components/ProfileDetails';
import Resetpassword from './components/Resetpassword';

function App() {
  return (
    <Router>
      <div id="wrapper">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/adduser" element={<Adduser />} />
          <Route path="/profile" element={<Profile />}>
            <Route path="details" element={<ProfileDetails />} />
            <Route path="reset-password" element={<Resetpassword />} />
          </Route>
          <Route path="/pendingrequest" element={<PendingRequest />} />
          <Route path="/task" element={<Task />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
