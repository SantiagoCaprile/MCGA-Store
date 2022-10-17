
// import { Navigate, Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout';
import React from "react";
import './App.css';
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import LogIn from './screens/LogIn';
import Products from './screens/Products';

function App() {
  return (
    // <Layout>
    <div className="App">
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/products" element={<Products />} />
    </Routes>
    </div>
    // </Layout>
  );
}

export default App;

  // <Route path="/products" element={<Products />} />
  // <Route path="*" element={<Navigate to="/" />} />
  // <Login />