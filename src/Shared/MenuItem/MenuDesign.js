import React from 'react';

const MenuDesign = ({item}) => {

    const {image, price, name, recipe} = item;
    console.log(item);


    return (
        <div className='flex space-x-3'>
            <img style={{ borderRadius:'0 200px 200px 200px'}} className='w-[100px]' src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}</h3>
                <p>{recipe}</p>
            </div>
           <div>
            <p className='text-yellow-400'>${price}</p>
            <button className="btn btn-sm btn-warning">Order Now!</button>
           </div>
        </div>
    );
};

export default MenuDesign;