import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IoMenu } from "react-icons/io5";
import { navlinks } from '../constants';
import { CiSearch } from "react-icons/ci";
import { SiPolymerproject } from 'react-icons/si';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');
  const [toggleDrawer, setToggleDrawer] = useState(false);

  return (
    <div className="flex md:flex-row flex-col-reverse justify-end mb-[35px] gap-14 sticky">
      <div className="lg:flex-1 flex flex-row max-w-xl py-2 pl-4 ml-4 pr-2 h-[52px] bg-white shadow-lg rounded-[100px]">
        <input type="text" placeholder="Search for Projects" className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-gray-500 text-black bg-white outline-none" />
        <div className="w-[72px] h-full rounded-[20px] bg-[#836FFF] flex justify-center items-center cursor-pointer text-white font-bold">
          <CiSearch size={20} />
        </div>
      </div>

      <div className="flex-row items-center justify-end hidden gap-4 sm:flex">
        {/* <ConnectWallet theme={'light'} /> */}
        <ConnectButton />
        <Link to="/dashboard">
          <div className="w-[52px] h-[52px] rounded-full bg-white shadow-lg flex justify-center items-center cursor-pointer">
            <img src={'/metamask-icon.webp'} alt="user" className="w-[60%] h-[60%] object-contain" />
          </div>
        </Link>
      </div>

      <div className="relative flex items-center justify-between sm:hidden">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <SiPolymerproject onClick={() => navigate('/')} className='text-[#1dc071]' />
        </div>
        <IoMenu
          className='text-[#1dc071]'
          size={20}
          onClick={() => setToggleDrawer((prev) => !prev)}
        />

        <div className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${!toggleDrawer ? '-translate-y-[100vh]' : 'translate-y-0'} transition-all duration-700`}>
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex p-4 ${isActive === link.name && 'bg-[#3a3a43] text-[#1dc071]'}`}
                onClick={() => {
                  setIsActive(link.name);
                  setToggleDrawer(false);
                  navigate(link.link);
                }}
              >
                {link.icon}
                <p className={`ml-[20px] font-epilogue font-semibold text-[14px] ${isActive === link.name ? 'text-[#1dc071]' : 'text-[#808191]'}`}>
                  {link.name}
                </p>
              </li>
            ))}
          </ul>

          <div className="flex mx-4">
            {/* <ConnectWallet theme={'light'} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
