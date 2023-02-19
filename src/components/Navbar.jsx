import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaWallet, FaUserFriends } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4 '>
      {/* Partie gauche */}
      <div className='flex items-center'>
        <div className='cursor-pointer' onClick={() => setNav(!nav)}>
          <AiOutlineMenu size={30} />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
          Top <span className='font-bold'>Eats</span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>Delivery</p>
          <p className='p-2'>Pickup</p>
        </div>
      </div>

      {/* Search input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={25} />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Rechercher'
        />
      </div>

      {/* Boutton atc */}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill className='mr-2' size={20} /> Cart
      </button>

      {/* Menu mobile */}
      {/* Overlay */}
      {nav ? (
        <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
      ) : (
        ""
      )}
      {/* Menu de gauche */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300 "
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300 "
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
        />
        <h2 className='text-2xl p-4'>
          Top <span className='font-bold'>Eats</span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'>
              <TbTruckDelivery size={25} className='mr-4' /> Commandes
            </li>
            <li className='text-xl py-4 flex'>
              <MdFavorite size={25} className='mr-4' /> Favoris
            </li>
            <li className='text-xl py-4 flex'>
              <FaWallet size={25} className='mr-4' /> Panier
            </li>
            <li className='text-xl py-4 flex'>
              <MdHelp size={25} className='mr-4' /> Aide
            </li>
            <li className='text-xl py-4 flex'>
              <AiFillTag size={25} className='mr-4' /> Promotions
            </li>
            <li className='text-xl py-4 flex'>
              <BsFillSaveFill size={25} className='mr-4' /> Meilleur
            </li>
            <li className='text-xl py-4 flex'>
              <FaUserFriends size={25} className='mr-4' /> Inviter des amis
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;