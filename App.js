import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home/Home';
import About from './components/Pages/About us/About';
import Services from './components/Pages/Services/Services';
import Menu from './components/Pages/Menu/Menu';
import Contact from './components/Pages/Contact us/Contact';
import Navbar from './components/Template/Navbar';
import Footer from './components/Template/Footer';
import Search from './components/Pages/Search Page/Search';
import PersonalLoginPage from './components/Pages/Personal Login Page/PersonalLoginPage';
import DashboardPage from './components/Pages/Dashboard Page/DashboardPage';

export default function App() {
  const renderRoute = (routePath, component) => {
    return (
      <Route
        path={routePath}
        index
        element={
          <>
            <Navbar />
            {component}
            <Footer />
          </>
        }
      />
    );
  };

  return (
    <BrowserRouter>
      <Routes>
        {renderRoute('/', <Home />)}
        {renderRoute('about', <About />)}
        {renderRoute('services', <Services />)}
        {renderRoute('menu', <Menu />)}
        {renderRoute('contacts', <Contact />)}
        {renderRoute('search/:searchValue', <Search />)}
        <Route path='personal-page' element={<PersonalLoginPage />} />
        <Route path='dashboard/:id' element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}
