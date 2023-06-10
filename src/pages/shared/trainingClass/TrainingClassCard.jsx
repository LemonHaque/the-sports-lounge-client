
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../components/hooks/UseCart";

const TrainingClassCard = ({ item }) => {
    const { image, name, numberOfStudents, _id } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart();
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddToCart = item => {
        console.log(item);
        if (user && user.email) {
            const cartItem = { menuItemId: _id, name, image, numberOfStudents, email: user.email }
            fetch('http://localhost:5000/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(cartItem)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Food added on the cart.',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login to order the food',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }

    return (
        <div>

            <div className=" w-96 h-[450px] glass text-center border-40 bg-black text-white">
                <figure><img src={image} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="text-xl font-semibold">{name}</h2>
                    <p className="text-lg">Number of Attendence: {numberOfStudents}</p>
                    <p className="absolute top-4 right-4 btn btn-sm btn-warning">Trending</p>
                    <div className="card-actions justify-end mx-auto">

                        <button onClick={() => handleAddToCart(item)} className="btn btn-warning btn-outline">Get Admited</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingClassCard;