import Swal from "sweetalert2";
import useCart from "../../../components/hooks/UseCart";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {
    const [cart, refetch] = useCart();
    console.log(cart);
    const total = cart?.reduce((sum, item) => item.price + sum, 0)
    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your added food has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div className="w-full px-5">
            <Helmet>
                <title>Sports Lounge | My Cart</title>
            </Helmet>
            <div className="flex font-semibold justify-evenly items-center h-[60px] my-3">
                <h3 className="text-3xl text-center">Selected Classes: {cart.length}</h3>
                <h3 className="text-3xl text-center">Total Price: ${total}</h3>
                <Link to="/dashboard/payment"><button className="btn btn-warning btn-sm">Pay</button></Link>
            </div>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Classes</th>
                            <th>Classes Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>{index + 1}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={item.image} />
                                        </div>
                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td className="text-end">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-error text-white bg-red-600"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyCart;