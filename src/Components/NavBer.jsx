import React, { useState } from 'react'
import Container from "./Container"
import Button from "./Button"

import { IoMenu } from "react-icons/io5";
import { FaRegWindowClose } from "react-icons/fa";

import Logo from "../assets/LOGO.png"
import MenuBer from './MenuBer';
import LogoPart from './LogoPart';

const NavBer = () => {

    const [navber, setNavber] = useState(false)

    const handleNavber =()=>{
        setNavber(!navber)
        // alert("its working now")
    }

  return (
    <>
        <header className=' pt-[40px] pb-[20px]  fixed w-full bg-[#050709] z-100 border-b-2 '>
            <Container>
                <nav className='flex justify-between items-center relative '>
                    <LogoPart/>
                    <div  className={`${navber ? " bg-[#6346c9] lg:bg-[#050709] p-4 top-20 rounded-2xl " : " top-[-300px]"}  w-full  lg:w-[70%] lg:flex justify-between items-center transition-all duration-900 absolute   lg:sticky`}>
                      <MenuBer/>
                        <Button>Hire Me</Button>
                    </div>
                    <button 
                    onClick={handleNavber}
                    className='block lg:hidden font-bold text-4xl text-white pr-3 cursor-pointer'> 
                        {!navber?<IoMenu />:<FaRegWindowClose />}
                        </button>
                </nav>
            </Container>
        </header> 
    </>
  )
}

export default NavBer
  