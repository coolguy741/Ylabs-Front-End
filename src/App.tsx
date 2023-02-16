import React, { useState } from 'react';
import { Routes, Route, Outlet, useLocation} from 'react-router-dom';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Arufo } from './pages/Arufo/Arufo';
import { Rapid } from './pages/Rapid';
import { Planify } from './pages/Planify';
import { Header } from './components/organisms/Header';
import { ThemeContext, ThemeContextProps } from './context/ThemeProvider';
import { useTranslation, Trans } from 'react-i18next';
import { ParallaxProvider } from 'react-scroll-parallax';

const lngs = {
  en: { nativeName: 'English' },
  de: { nativeName: 'Deutsch' }
};

function App() {
  const [Theme, setTheme] = useState('light');
  const value:ThemeContextProps={theme:Theme, setTheme};
  
  return (
    <ThemeContext.Provider value={value}>
      <ParallaxProvider>
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
      </ParallaxProvider>
    </ThemeContext.Provider>
  );
}

function Layout(){
  const {t, i18n} = useTranslation();
  const location = useLocation();
  
  return (
    <ThemeContext.Consumer>
       {({theme, setTheme}) => (
        <>
          <div className='bg-white dark:bg-black text-black dark:text-white min-h-screen text-pp-neue-montreal'>
            {location.pathname === '/arufo' ? <Header whiteThemeEffect={false} blurEffect={false}/> : <Header whiteThemeEffect={true} blurEffect={true}/>}
            <Outlet />
            {/* <div>{t('description.part2')}</div>
            <Trans i18nKey="description.part1">
              Edit <code>src/App.js</code> and save to reload.
            </Trans> */}
          </div>
        </>
      )}
    </ThemeContext.Consumer>
  );
}

export default App;
