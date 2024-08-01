import React, { useState } from 'react';
import Navbar from './Navbar';

function Menu() {
  const [images, setImages] = useState([
    { image: 'Menu_page-0002.jpg' },
    { image: 'Menu_page-0003.jpg' },
    { image: 'Menu_page-0004.jpg' },
    { image: 'Menu_page-0005.jpg' },
    { image: 'Menu_page-0006.jpg' },
    { image: 'Menu_page-0007.jpg' },
    { image: 'Menu_page-0008.jpg' },
    { image: 'Menu_page-0009.jpg' },
    { image: 'Menu_page-0010.jpg' },
    { image: 'Menu_page-0011.jpg' },
    { image: 'Menu_page-0012.jpg' },
    { image: 'Menu_page-0013.jpg' },
    { image: 'Menu_page-0014.jpg' },
    { image: 'Menu_page-0015.jpg' },
    { image: 'Menu_page-0016.jpg' },
    { image: 'Menu_page-0017.jpg' },
    { image: 'Menu_page-0018.jpg' },
    { image: 'Menu_page-0019.jpg' },
    { image: 'Menu_page-0020.jpg' },
    { image: 'Menu_page-0021.jpg' },
    { image: 'Menu_page-0022.jpg' },
    { image: 'Menu_page-0023.jpg' },
    { image: 'Menu_page-0024.jpg' },
    { image: 'Menu_page-0025.jpg' },
    { image: 'Menu_page-0026.jpg' },
    { image: 'Menu_page-0027.jpg' },
    { image: 'Menu_page-0028.jpg' },
    { image: 'Menu_page-0029.jpg' },
    { image: 'Menu_page-0030.jpg' },
    { image: 'Menu_page-0031.jpg' },
  ]);

  return (
    <div  >
      <div className="bg-[url('/bg3.jpg')]  w-full h-auto">
        <Navbar/>
        <h1 className=' bg-zamzam mx-8 text-3xl lg:mx-24 lg:mt-10 text-center text-white lg:text-5xl font-semibold tracking-wider lg:p-10 p-5 sm:mx-12 mt-5  '>Menu</h1>
      <div className=" flex flex-wrap justify-center bg-zamzam lg:mx-24 mx-8 ">
        {images.map((item, index) => (
          <div key={index} className="m-4 p-2 ">
            <img src={`./Menu/${item.image}`} alt={`Menu item ${index + 1}`} className=" lg:h-25 object-cover h-80 " />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Menu;
