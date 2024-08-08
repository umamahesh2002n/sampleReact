import React from 'react';
import { BrowserRouter as Router, Routes,Route,Navigate } from 'react-router-dom';
import LoginScreen from './intialScreen/LoginScreen'
import HomeScreen from './intialScreen/HomePage'
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={<Navigate to="/login" replace />}
        />
          <Route path="/login" element= {<LoginScreen />}/>
          <Route path="/homeScreen" element= {<HomeScreen />}/>

      </Routes>
    </Router>
  );
}

export default App;
