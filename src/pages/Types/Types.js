import React from 'react';
import img1 from '../../assests/Dish Item/download (565.jpg';
import img2 from '../../assests/Dish Item/images (1).jpg';
import img3 from '../../assests/Dish Item/food.jpg';

const Types = () => {
    return (
        <div className='mb-10 '>
             <h3 className='text-center text-yellow-400 text-4xl my-4 mx-auto py-4 '>Our Special Items </h3>
            <div className='flex mx-20'>
                <div class="mx-2 my-4 bg-white rounded-md shadow-md overflow-hidden">
                    <img src={img3} className='lg:w-100% md: w-60% xl:w-30% mx-auto' alt="" />
                </div>
                <div className=' mx-2 my-3'>
                    <p className='text-center text-1xl text-sky-400 my-2 p-2'>Rich & Healthy</p>
                    <h2 className='text-4xl text-rose-500 text-center my-2 p-2'>Highest quality artisangrains,<br />
                     proteins & seasonal ingredients</h2>
                     <p className='my-2 p-2'>Righteous indignation and dislike men
                        <br /> who are so beguiled and demoralized by the 
                        <br />charms of pleasure of the moment, so blinded by desires,
                        <br /> that they cannot foresee.</p>
                </div>
                <div>
                    <img src={img2} className='h-99 mx-2 my-4 bg-white rounded-md shadow-md overflow-hidden' alt="" />
                </div>
            </div>
        </div>


    );
};

export default Types;