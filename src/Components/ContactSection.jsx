import React from 'react'
import Section from './Section'
import Container from './Container'
import Flex from './Flex'
import Button from './Button'

import { Element } from 'react-scroll'

import ContactImg from "../assets/contact1.png"
import SocialIconSection from './SocialIconSection'

const ContactSection = () => {
  return (
    <>
    <Element name='section6'>
        <Section className="bg-SixColor">
            <Container>
                <Flex className=" flex-wrap items-center justify-center gap-15 lg:items-end lg:justify-between  ">
                    <div>
                        <div className='text-white bg-ThereColor grid gap-6 px-[20px] py-[30px] md:px-5 lg:px-[30px] lg:py-10  rounded-[15px] '>
                            <div>
                                <img  className='rounded-2xl' src={ContactImg} alt="Contact Image" />
                            </div>
                            <div className=' max-w-[440px] grid gap-4'>
                                <h2 className='text-2xl lg:text-3xl leading-7'>Asaduzzaman Rahim</h2>
                                <h3 className='text-[18px] lg:text-xl'>Frontend Develeoper</h3>
                                <p className='text-[18px] lg:text-xl'>I am available for freelance work. Connect with me via and call in to my account.</p>
                            </div>
                            <div className='text-[18px] lg:text-xl'>
                                <h4>Email: rahim.asaduzzaman@gmail.com</h4>
                                <h4>Phone: +88 01608-441414</h4>
                            </div>
                            <div className="grid gap-3">
                                <span className='text-[16px] uppercase'>Find With Me</span>
                                <SocialIconSection/>
                            </div>
                        </div>
                    </div>  

                    <div>
                        <form action="#" className='bg-ThereColor px-[15px] py-[30px] md:px-5 lg:px-[30px] lg:py-10  rounded-[15px]'>
                            <div className='text-center mb-6 max-w-[600px]'>
                                <h2 className='text-3xl md:text-[35px] lg:text-[40px] xl:text-[45px]  font-bold bg-gradient-to-r  from-[rgb(135,80,247)] to-white bg-clip-text text-transparent mb-3.5 '>Let’s work together!</h2>
                                <p className='text-white text-xl'>I design and code beautifully simple things and i love what i do. Just simple like that!</p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[15px]">
                                <div>
                                    <input type="text" placeholder='First Name'
                                    className="text-white w-full px-5 py-[14px] border border-gray-500 bg-inputColor focus:border-primary rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-500 leading-1"/>
                                </div>
                                <div>
                                    <input type="text" placeholder='Last Name'
                                    className="text-white w-full px-5 py-[14px] border border-gray-500 bg-inputColor focus:border-primary rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-500 leading-1"/>
                                </div>
                                <div>
                                    <input type="email" placeholder='Email Address'
                                    className="text-white w-full px-5 py-[14px] border border-gray-500 bg-inputColor focus:border-primary rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-500 leading-1"/>
                                </div>
                                <div>
                                    <input type="number" placeholder='Phone Number'
                                    className="text-white w-full px-5 py-[14px] border border-gray-500 bg-inputColor focus:border-primary rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-500 leading-1"/>
                                </div>

                                <div className='sm:col-start-1 sm:col-span-2'>
                                    <textarea type="text" placeholder='Massage' cols="1" rows="40"
                                    className="text-white w-full px-5 pb-2 py-[14px] border border-gray-500 bg-inputColor focus:border-primary rounded-lg outline-none focus:outline-none transition-all duration-300 placeholder:text-gray-500 leading-1">
                                    </textarea>

                                </div>
                                <div className='my-3'>
                                    <Button>Send Massage</Button>
                                </div>
                            </div>
                        </form>
                    </div>  


                </Flex>    
            </Container>    
        </Section>         
    </Element>

    </>
  )
}

export default ContactSection
