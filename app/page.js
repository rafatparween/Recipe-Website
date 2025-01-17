'use client'
import React from 'react';
import Header from './header';
import LanDingPage from './landingPage/landingPage';

const Home = () => {
  return (
    <div>
     
      <Header />
      <LanDingPage/>
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        </div>
      </main>
    </div>
  );
};

export default Home;
