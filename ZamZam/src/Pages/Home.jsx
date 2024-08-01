import React from 'react';
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Home() {
  return (
    <div className="bg-[url('/zamzam.jpg')] bg-no-repeat bg-cover bg-center h-96 lg:bg-cover lg:h-screen lg:w-full">
      <div className=" lg:h-screen">
        <nav className="mx-auto">
          <div className="flex justify-center lg:space-x-4 p-2 lg:p-4 ">
            <h1 className="text-yellow-200 text-base   font-bold lg:mx-20 mx-6 lg:text-xl flex"> <CiLocationOn className=' w-6 h-6   lg:w-8 lg:h-8' /> Qatar</h1>
            <h1 className="text-yellow-200 text-base  font-bold lg:text-xl flex">  <CiMail className=' w-6 h-6  lg:w-8 lg:h-8' />  info@zamzammandiqatar.com</h1>
          </div>
        </nav>
        <div>
          <div className='flex justify-center lg:mt-12'>
            <img src="/Logo3.png" alt="" className='w-48 h-48  lg:w-1/4 lg:h-1/4 '/>
          </div>
          <div> 
            <h1 className='text-red-600 text-center text-5xl lg:text-8xl font-semibold font-Arsenal tracking-normal pb-10 '>mandi restaurant </h1>
          </div>
        </div>
      </div>
      <div>
      <div className="bg-zamzam w-full lg:h-128 h-screen ">
        <div className="flex lg:flex-row h-full flex-wrap">
          <div className="basis-2/4 flex justify-center  ">
          <div className=" w-96 :lg:h-full h-full flex flex-row items-center">
          <h1 className="text-white text-4xl lg:text-7xl font-bold font-poppins px-3  text-center">
            We are opening soon...
          </h1>
          </div>
          </div>
        <div className="basis-2/4 flex justify-center items-center">
          <div className="flex flex-col items-center w-96 h-46 bg-white bg-opacity-10 p-3 rounded-lg lg:m-5 ml-0.5">
            <h1 className="text-white text-center font-kanit font-medium text-3xl">Our</h1>
            <h1 className="text-white text-center">Menu</h1>
            <img src="/menu.png" alt="" className="mt-3" /> 
          <Link to={'/menu'} ><button className="text-white bg-gradient-to-r from-red-600 to-red-700 p-2 rounded-lg text-lg ">View more </button></Link> 
          </div>
        </div>
        </div> 
      </div>
    </div>
    <Footer/>
    </div>
   
  );
}

export default Home;
