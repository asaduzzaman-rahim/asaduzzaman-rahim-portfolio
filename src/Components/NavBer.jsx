import React, { useState } from 'react'
import Container from "./Container"
import Button from "./Button"

import { IoMenu } from "react-icons/io5";
import { FaRegWindowClose } from "react-icons/fa";

import Logo from "../assets/LOGO.png"

const NavBer = () => {

    const [navber, setNavber] = useState(false)

    const handleNavber =()=>{
        setNavber(!navber)
        // alert("its working now")
    }

  return (
    <>
        <header className=' pt-[40px] pb-[20px] shadow-2xl fixed w-full bg-bgcart border-b-2'>
            <Container>
                <nav className='flex justify-between items-center relative'>
                    <span> 
                    {/* className='text-2xl font-black bg-gradient-to-r  from-orange via-orange-500 to-red-500 bg-clip-text text-transparnet drop-shadow-[0_5px_25px_rgba(255,80,0,0,5)] tracking-widest'> Asaduzzaman Rahim */}
                        <img src={Logo} alt="Website Logo" />
                    </span>
                    <div  className={`${navber ? "block bg-bgcart p-4 left-0" : "hidden "}  w-full  lg:w-[75%] lg:flex justify-between items-center  absolute top-15  lg:sticky`}>
                        <ul className=' gap-[60px] lg:flex items-center  text-[16px] mb-[14px] font-medium tracking-[2px] text-whiteDark'>
                            <li>Home</li>
                            <li>Service</li>
                            <li>About</li>
                            <li>Protfolio</li>
                            <li>Contact Me</li>
                        </ul>
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
  