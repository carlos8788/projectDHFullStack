import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Layout from './pages/Layout';
// Importa otros componentes de páginas si es necesario

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Define rutas adicionales según sea necesario */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
