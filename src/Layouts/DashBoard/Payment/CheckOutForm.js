import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiousSecure';
import useAuth from '../../../hooks/useAuth';

const CheckOutForm = ({price, cart}) => {

    const stripe = useStripe();
    const elements = useElements();
    const {user} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSercet, setClientSercet] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');



    useEffect(()=>{
        console.log(price);
       axiosSecure.post('/create-payment-intent', {price})
       .then(res => {
        console.log(res.data.clientSecret);
        setClientSercet(res.data.clientSecret);
       })
    }, [])

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (!stripe || !elements) {

            return
        }


        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setCardError('');
        }

        setProcessing(true);

        const {paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
            clientSercet,
            {
              payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous name'
                },
              },
            },
          );
          if (confirmError) {
            console.log(confirmError);
        }

        console.log('paymentIntent',paymentIntent);

        setProcessing(false);

        if(paymentIntent.status ==='succeeded'){

            setTransactionId(paymentIntent.id);

          const payment = {
            email: user?.email, transactionId: paymentIntent.id,
            price,
             quantity: cart.length,
             items: cart.map(item => item._id),
             itemsName: cart.map(item => item.name)
          }
          axiosSecure.post('/payments', payment)
          .then(res=> {
            console.log(res.data);
            if(res.data.insertedId){
                // display confirm
            }
          })


        }

    }

    return (
        <>
            <form className='w-2/3 p-4 my-4 mx-4' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn btn-outline btn-secondary btn-sm mt-4" 
                type="submit" disabled={!stripe || !clientSercet || processing}>
                    Pay
                </button>
            </form>
            {
                cardError && <p className='text-red-600'>{cardError}</p>
            }
            {
                transactionId && <p className='text-green-500'>Transaction 
                Complete with transactionId : {transactionId}</p>
            }
        </>
    );
};

export default CheckOutForm;