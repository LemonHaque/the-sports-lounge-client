import { Helmet } from "react-helmet-async";
import UseCart from "../../../hooks/UseCart";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [cart] = UseCart();
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    const price = parseFloat(total.toFixed(2))

    return (
        <div>
            <Helmet>
                <title>Sports Lounge | Payment</title>
            </Helmet>
            <div className="text-center my-10">
                <p className="text-4xl md:text-5xl font-bold text-black uppercase border-b-4 py-4 w-4/12 mx-auto">Payment</p>
            </div>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price} cart={cart}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;