// src/App.js
import React from 'react';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Navbar from './components/navbar';
import LeftSection from './components/leftsection';
import RightSection from './components/rightsection';

function App() {
  return (
    // <div className='w-full flex flex-row gap-4 p-10 bg-slate-900'>
    //   <div className='w-1/2'>
    //     <LeftSection />
    //   </div>
    //   <div className='w-1/2'>
    //     test2
    //   </div>
    // </div>
    <div className='w-full gap-4 p-10 bg-slate-900'>
      <div className='mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 bg-slate-900'>
        <div className='lg:flex lg:justify-between lg:gap-4'>
          <LeftSection />
          <RightSection />
        </div>
      </div>
    </div>
  );
}

export default App;
