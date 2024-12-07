import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import UserManagement from './pages/UserManagement';
import RoleManagement from './pages/RoleManagement';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/users" element={<UserManagement />} />
                <Route path="/roles" element={<RoleManagement />} />
            </Routes>
        </Router>
    );
};

export default App;
