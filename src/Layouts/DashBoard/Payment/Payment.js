import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';
import useCart from '../../../hooks/useCart';


// TODO : Provide Publishable Key 
const stripePromise = loadStripe('pk_test_51Np2d5AFU6oDKc6vgkEz08CpzDf7WMQX3H7Mh1kVxaNPwVTqlR7T0GZDBRk3tb5R1KWsmMsKBciDQd7JoasJezbi00u3vvLy9z');

  

const Payment = () => {
    
    const [cart] = useCart();
    const total = cart.reduce((sum,item)=> sum+ item.price ,0);
    const price = parseFloat(total.toFixed(2));
   
    return (
        <div> 
            <div>
                <h2 className="text-4xl semibold text-orange-600 text-center my-4 p-4 ">PayMent Method</h2>
            </div>
            <h2>Taka Taka</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;