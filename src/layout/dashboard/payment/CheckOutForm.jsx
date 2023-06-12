import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import UseAuth from "../../../hooks/UseAuth";
import UseAxiosSecure from "../../../hooks/UseAxiosSecure";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CheckOutForm = ({ price, cart }) => {

    const stripe = useStripe();
    const elements = useElements();
    const { user } = UseAuth();
    const [axiosSecure] = UseAxiosSecure();

    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProccesing] = useState(false);
    const [transactionId, setTransactionId] = useState('');


    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [price, axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card == null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log('[Error]', error);
            setCardError(error.message)
        } 

        else {
            setCardError('');
        }
        setProccesing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'annonymous',
                        name: user?.displayName || 'annonymous',
                    },
                },
            },
        );

        if (confirmError) {
            console.log(confirmError);
        }
        console.log('Payment intent', paymentIntent);
        setProccesing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                quantity: cart.length,
                date: new Date(),
                cartItems: cart.map(item => item._id),
                menuItems: cart.map(item => item.menuItemId),
                orderStatus: "Pending",
                itemNames: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    if (res.data.result.insertedId) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Payment Successfull',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

    }
    return (
        <>
            <form className="w-2/3 mx-auto" onSubmit={handleSubmit}>
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
                <div className="text-center my-10">
                    <button className="btn btn-warning my-5 w-1/2" type="submit" disabled={!stripe || !clientSecret || processing}>
                        Payment
                    </button>
                </div>
            </form>
            {cardError && <p className=" text-2xl text-red-600 text-center">{cardError}</p>}
            {transactionId && <p className="text-2xl text-green-600 text-center">Transaction Completed  with TramsactionId : {transactionId}</p>}
        </>
    );
};

export default CheckOutForm;