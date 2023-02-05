import React from 'react';

import Image from '../assets/img/hom.jpg';
import Search from '../components/Search';

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] mb-8 xl:mb-24">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[58px] font-semibold leading-none mb-6">
            <span className="text-blue-700">Rent</span> Your Dream{' '}
            <span className="text-blue-700">House</span> With Us.
          </h1>
          <p className="max-w-[480px] mb-8 text-gray-500">
          We strive to provide a user-friendly platform that connects individuals with their ideal rental properties, while also making it easy for landlords to manage their listings. 
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-end">
          <img src={Image} alt="" className="rounded-l-full" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
