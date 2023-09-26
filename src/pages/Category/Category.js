import React from 'react';
import img1 from '../../assests/item/download (4).jpg';
import img2 from '../../assests/item/download (5).jpg';
import img3 from '../../assests/item/download (6).jpg';
import img4 from '../../assests/item/download (8).jpg';


const Category = () => {
    return (
        <>
            <div className='justify-center items-center my-7'>
                <h3 className='text-4xl text-center'>Order Online</h3>
                <p className='text-center my-2'>------------Our Delicious Food--------------</p>
            </div>

            <div className='flex mx-auto my-6'>
                <div className="card w-50 bg-base-100 shadow-xl mx-2">
                    <figure><img src={img1} className='w-50%' alt="Shoes" /></figure>
                    <div className="card-body justify-center items-center">
                        <h2 className="card-title text-4xl text-emerald-400 text-center">Burger</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-2">
                    <figure><img src={img2}   className='w-50%' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl mx-2">
                    <figure><img src={img3}   className='w-50%' alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                   
                </div>
            </div>
        </>
    );
};

export default Category;