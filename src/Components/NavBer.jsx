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
        <header className=' pt-[40px] pb-[20px]'>
            <Container>
                <nav className='flex justify-between items-center  relative'>
                    <span >
                        <img src={Logo} alt="Website Logo" />
                    </span>
                    <div  className={`${navber ? "block" : "hidden"}  w-full px-5 pt-5 pb-10 lg:w-[80%] lg:flex justify-between items-center  absolute top-12 left-0 lg:sticky`}>
                        <ul className=' items-center gap-[60px] lg:flex text-[20px] mb-[14px] font-medium tracking-[2px] text-whiteDark'>
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
// {!navber?<IoMenu />:<FaRegWindowClose />}
export default NavBer
  