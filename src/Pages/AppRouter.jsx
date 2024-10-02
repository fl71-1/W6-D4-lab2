import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Details from './Details';
function AppRouter() {
  return (
    <Router>
      <Routes>
<Route
 path="/" 
 element={<Home />} />
 
 <Route 
 path="/character/:id" 
 element={<Details />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;
