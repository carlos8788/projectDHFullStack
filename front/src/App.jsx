import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
import DataTable from './pages/DataTable';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/all" element={<DataTable dataType={'products'} />} />
          <Route path="/carts/all" element={<DataTable dataType={'carts'} />} />
          <Route path="/users/all" element={<DataTable dataType={'users'} />} />
          
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
