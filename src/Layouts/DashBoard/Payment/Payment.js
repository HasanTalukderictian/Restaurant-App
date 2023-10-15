import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from './CheckOutForm';


// TODO : Provide Publishable Key 
const stripePromise = loadStripe('pk_test_51Np2d5AFU6oDKc6vgkEz08CpzDf7WMQX3H7Mh1kVxaNPwVTqlR7T0GZDBRk3tb5R1KWsmMsKBciDQd7JoasJezbi00u3vvLy9z');



const Payment = () => {


    return (
        <div> 
            <div>
                <h2 className="text-4xl semibold text-orange-600 text-center my-4 p-4 ">PayMent Method</h2>
            </div>
            <h2>Taka Taka</h2>
            <Elements stripe={stripePromise}>
                <CheckOutForm></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;