import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';

const FoodCard = ({item}) => {
    // this item props
    const {image, price, name, recipe, _id} = item;

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();



    const handleAddToCart =item =>{
       console.log(item);
       if(user && user.email){

        const cartItem = { menuitemId: _id, name, price, email:user.email}

         fetch('http://localhost:4000/carts', {
            method:'POST',
            headers:{

                'content-type':'application/json'

            },

            body:JSON.stringify(cartItem)

         })
         .then(res=> res.json())
         .then(data =>{
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Food Added on The Cart',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
            
         })
       }
       else{
        Swal.fire({
            title: 'Please Login to Order the Food',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Login Now'
          }).then((result) => {
            if (result.isConfirmed) {
              navigate('/login', {state: { from: location}})
            }
          })
    }
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
                        <button onClick={ () =>handleAddToCart(item)} className="btn btn-outline btn-warning">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;