import React from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Arufo from './pages/Arufo';
import Rapid from './pages/Rapid';
import Planify from './pages/Planify';

function App() {
  return (
    <Routes>
      <Route path='/' element = {<Layout />}>
        <Route index element = {<Home/>} />
        <Route path='/work' element = {<Work/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/contact' element = {<Contact/>} />
        <Route path='/arufo' element = {<Arufo/>} />
        <Route path='/rapid' element = {<Rapid/>} />
        <Route path='/planify' element = {<Planify/>} />
      </Route>
    </Routes>
  );
}

function Layout(){
  return (
    <>
      <Navbar/>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
