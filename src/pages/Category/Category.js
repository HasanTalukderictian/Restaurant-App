import React from 'react';
import img1 from '../../assests/item/download (4).jpg';
import img2 from '../../assests/item/download (5).jpg';
import img3 from '../../assests/item/download (6).jpg';
import img4 from '../../assests/item/download (8).jpg';
import img5 from '../../assests/item/download (66).jpg';


const Category = () => {
    return (
        <>
            <div className='justify-center items-center my-7'>
                <h3 className='text-4xl text-center'>Order Online</h3>
                <p className='text-center my-2'>------------Our Delicious Food--------------</p>
            </div>

            <div className='flex mx-auto my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-24'>
                <div className="card w-50 bg-base-100 shadow-xl mx-2">
                    <figure><img src={img4} className='w-50% object-fill' alt="Shoes" /></figure>
                    <div className="card-body justify-center items-center">
                        <h2 className="card-title text-4xl text-emerald-400 text-center">Beff Cary</h2>
                       
                    </div>
                </div>
                <div className="card w-50 bg-base-100 shadow-xl mx-2">
                    <figure><img src={img2}   className='w-50% object-fill' alt="Shoes" /></figure>
                    <div className="card-body justify-center items-center">
                    <h2 className="card-title text-4xl text-emerald-400 text-center">Iisha Fish</h2>
                        
                    </div>
                </div>
                <div className="card w-50 bg-base-100 shadow-xl mx-2">
                    <figure><img src={img3}   className='w-50% object-fill' alt="Shoes" /></figure>
                    <div className="card-body justify-center items-center">
                    <h2 className="card-title text-4xl text-emerald-400 text-center">Chiken Carry</h2>
                       
                    </div>
                   
                </div>
                <div className="card w-50 bg-base-100 shadow-xl mx-2">
                    <figure><img src={img1}   className='w-50% object-fill' alt="Shoes" /></figure>
                    <div className="card-body justify-center items-center">
                    <h2 className="card-title text-4xl text-emerald-400 text-center">Burger</h2>
                       
                    </div>
                   
                </div>
                <div className="card w-50 bg-base-100 shadow-xl mx-2 ">
                    <figure><img src={img5}   className='w-50% object-fill' alt="Shoes" /></figure>
                    <div className="card-body justify-center items-center">
                    <h2 className="card-title text-4xl text-emerald-400 text-center">mushroom curry</h2>
                       
                    </div>
                   
                </div>
            </div>
        </>
    );
};

export default Category;