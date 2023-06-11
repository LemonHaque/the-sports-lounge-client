import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const AllUsers = () => {
        const [axiosSecure] = UseAxiosSecure();
        const { data: users = [], refetch } = useQuery(['users'], async () => {
            const res = await axiosSecure.get('/users')
            return res.data;
        })

        const handleMakeAdmin = user => {
            fetch(`http://localhost:5000/users/admin/${user._id}`, {
                method: 'PATCH'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.modifiedCount) {
                        refetch();
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: `${user.name} is an Admin Now!`,
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }

        const handleDelete = user => {

        }

        return (
            <div className="w-full px-6">
                <Helmet>
                    <title>Sports Lounge | All Users</title>
                </Helmet>
                <h3 className="text-3xl text-center my-6 font-semibold">Total Users: {users.length}</h3>
                <div className="overflow-x-auto">
                    <table className="table table-zebra w-full">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role === 'admin' ? 'admin' : <button onClick={() => handleMakeAdmin(user)} className="btn btn-warning text-white bg-yellow-500">Make Admin</button>}</td>
                                    <td><button onClick={() => handleDelete(user)} className="btn btn-error text-white bg-red-600"><FaTrashAlt></FaTrashAlt></button></td>
                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    export default AllUsers;