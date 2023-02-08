import React, { useState } from 'react';
import { Routes, Route, Outlet} from 'react-router-dom';
import Home from './pages/Home';
import Work from './pages/Work';
import About from './pages/About';
import Contact from './pages/Contact';
import Arufo from './pages/Arufo';
import Rapid from './pages/Rapid';
import Planify from './pages/Planify';
import {Header} from './components/organisms/Header';
import { ThemeContext, ThemeContextProps } from './context/ThemeProvider';

function App() {
  const [Theme, setTheme] = useState('light');
  const value:ThemeContextProps={theme:Theme, setTheme};

  return (
    <ThemeContext.Provider value={value}>
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
    </ThemeContext.Provider>
  );
}

function Layout(){
  return (
    <ThemeContext.Consumer>
       {({theme, setTheme}) => (
        <>
          <Header />
          <div>
            <Outlet />
          </div>
        </>
      )}
    </ThemeContext.Consumer>
  );
}

export default App;
