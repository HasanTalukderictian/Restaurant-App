import React from 'react';

const FoodCard = ({item}) => {
    // this item props
    const {image, price, name, recipe} = item;

    const handleAddtoCart =item =>{
       console.log(item);
    }
   
    return (

        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body justify-center my-4 px-4">
                    <h2 className="card-title text-center text-3xl">{name}</h2>
                    <p>{recipe}</p>
                    <p className='text-orange-700'>Price: $ {price}</p>
                    <div className="card-actions justify-center">
                        <button onClick={() => handleAddtoCart(item)} className="btn btn-outline btn-warning">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;