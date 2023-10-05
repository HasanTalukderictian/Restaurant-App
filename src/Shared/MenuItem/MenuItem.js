import React from 'react';

const MenuItem = ({item}) => {
    const {image, price, name, recipe} = item;
    console.log(item);
    return (
        <div className=' card rounded bg-slate-50 flex space-x-2 justify-center items-center my-4 mx-4 px-4 py-4'>
            
           <div className='flex '>
           <img className='w-64 h-48 rounded my-4 ' src={image} alt="" />
            <div className='text-center my-4'>
                <h3 className='text-4xl text-green-500 '>{name}</h3>
                <p className='my-2'>{recipe}</p>
                <p className='text-yellow-500'>${price}</p>
                <button className="btn btn-outline btn-warning">Order Now</button>
            </div>
           </div>
        </div>
    );
};

export default MenuItem;