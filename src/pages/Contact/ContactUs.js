import React from 'react';
import { Helmet } from 'react-helmet-async';
import Covered from '../../Shared/Cover/Covered';
import CoverImg from '../../assests/cover2.jpg';
import SectionTitle from '../../Components/SectionTitle';
import Call from '../../assests/file/call.png';
import Loc from '../../assests/file/loc.png';
import timer from '../../assests/file/timer.png';

import { FaLocationArrow } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Baton|Contact</title>
            </Helmet>
            <Covered img={CoverImg} title="Contact Us" details="Would You like to try a Dish?"></Covered>

            <div>
                <SectionTitle
                    heading="Our Location"
                    subHeading="Visit us"></SectionTitle>
                <div className='flex md:flex-cols-2 my-4 px-3 gap-4 mx-5'>
                    <div className='flex justify-center'>
                        <div className="card w-96  bg-current text-primary-content">
                            <div className="card-body">
                                <div className="card-actions rounded justify-center bg-green-500 justify-center">
                                    <img className='w-10' src={Call} alt="" />
                                </div>
                                <div className=' grid justify-center mt-2' >
                                    <h2 className="card-title text-black">Call Us</h2>
                                    <p className='text-black'>+8801768712230</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className="card w-96  bg-current text-primary-content">
                            <div className="card-body ">
                                <div className="card-actions rounded justify-center bg-green-500">
                                    <img className='w-10' src={Loc} alt="" />
                                </div>
                                <div className=' grid justify-center mt-2'>
                                    <h2 className="card-title text-center text-black">Location</h2>
                                    <p className='text-black'>1212 Dhaka, Mohakhali, Bangladesh</p>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <div className="card w-96  bg-current text-primary-content">
                            <div className="card-body">
                                <div className="card-actions rounded justify-center bg-green-500 justify-center">
                                    <img className='w-10' src={timer} alt="" />
                                </div>
                                <div className=' grid justify-center mt-2'>
                                    <h2 className="card-title text-black">Work Hour</h2>
                                    <p className='text-black'>Mon - Fri: 08:00 - 22:00</p>
                                    <p className='text-black'>Sat - Sun: 10:00 - 23:00</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='my-4'>
                <SectionTitle 
                heading="Contact FORM" 
                subHeading="----Send a Message----" ></SectionTitle>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default ContactUs;