import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import Dish from '../../assests/dish.jpg';

import './SpecialDish.css';



const SpecialDish = () => {
    return (
        
       <div className='BackGround'>
         <div className=' justify-center '>
          <SectionTitle 
          heading="Special Item"
          subHeading="Most Famous Dish"></SectionTitle>

        <div className='flex'>
        <div className='p-4 my-4 mx-auto '>
            <img className='w-50 h-50 rounded'  src={Dish} alt="" />

          </div>
          <div className='my-4 p-4 justify-center items-center'>
            <p className='text-white my-2'>20, Octobar, 2023</p>
            <p className='uppercase text-white my-2'>Most Famous Item, Where you can get?</p>
            <p className='text-white my-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo laudantium sunt unde nostrum 
                veritatis odit, distinctio natus odio voluptates. Perspiciatis
                 consectetur adipisicing elit. Quo laudantium sunt unde nostrum 
                veritatis odit, distinctio natus odio voluptates. Perspiciatis?</p>
                <button className="btn btn-outline btn-success text-white my-2 ">Read More</button>
          </div>
            
        </div>
        </div>
       </div>
    );
};

export default SpecialDish;