import img from "../../assets/login.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import SocialLogin from "../socialLogin/SocialLogin";

const SignUp = () => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {

                const loggedUser = result.user;
                console.log(loggedUser);

                updateUserProfile(data.name, data.photoURL)
                    .then(() => {
                        const saveUser = { name: data.name, email: data.email }
                        fetch('http://localhost:5000/', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(saveUser)

                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.insertedId) {
                                    reset();
                                    Swal.fire({
                                        position: 'top-end',
                                        icon: 'success',
                                        title: 'User Signed Up Successfully',
                                        showConfirmButton: false,
                                        timer: 1500
                                    })
                                    navigate("/");
                                }
                            })
                    })
                    .catch(error => console.log(error))
            })
    };

    return (
        <div className="py-20 bg-black glass bg-opacity-5">
            <Helmet>
                <title>Sports Lounge | SignUp</title>
            </Helmet>
            <h2 className='text-5xl text-yellow-500 py-6 font-bold text-center'>Sign Up</h2>
            <div className=" md:flex md:justify-between w-full">
                <div className="w-1/2 h-1/2 mx-auto">
                    <img src={img} alt="" />
                </div>
                <div className='m-2 w-1/2 mx-auto'>

                    <div className='flex flex-col justify-center'>
                        <form onSubmit={handleSubmit(onSubmit)} className='max-w-[400px] w-full mx-auto rounded-lg shadow-2xl p-8 px-8'>

                            <div className='flex flex-col py-2'>
                                <label>Name</label>
                                <input {...register("name", { required: true })} className='rounded-lg border mt-2 p-2 focus:border-yellow-500 focus:outline-none' type="text" required />
                                {errors.name && <span className="text-red-600 my-2">Name is required</span>}

                            </div>
                            <div className='flex flex-col py-2'>
                                <label>Photo URL</label>
                                <input {...register("photoURL", { required: true })} className='rounded-lg border mt-2 p-2 focus:border-yellow-500 focus:outline-none' type="text" required />
                                {errors.photoURL && <span className="text-red-600 my-2">Photo URL is required</span>}
                            </div>
                            <div className='flex flex-col py-2'>
                                <label>Email</label>
                                <input  {...register("email", { required: true })} className='rounded-lg border mt-2 p-2 focus:border-yellow-500 focus:outline-none' type="text" required />
                                {errors.name && <span className="text-yellow-600 my-2">Email is required</span>}
                            </div>
                            <div className='flex flex-col py-2'>
                                <label>Password</label>
                                <input {...register("password", {
                                    required: true,
                                    minLength: 6,
                                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                })} className='p-2 rounded-lg border mt-2 focus:border-yellow-500 focus:outline-none' type="password" required />
                                {errors.password?.type === 'minLength' && <p className="text-red-600 my-2" role="alert"><li>Password must be 6 character</li></p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600"><li>Password must have one Uppercase one lower case, one number and one special character(@/#/!).</li></p>}

                            </div>

                            <div className='flex justify-between py-2'>
                                <p className='flex items-center'><input className='mr-2 bg-red-400' type="checkbox" /> Remember Me</p>

                            </div>
                            <button className='w-full btn btn-warning my-4'>Sign Up</button>
                            <div className='text-center flex flex-col gap-3 mx-8 mb-2'>
                            </div>
                            <p className='text-center'>Already have an account? <Link className='text-blue-500' to='/login'>Login</Link></p>
                            <p className='text-red-500'></p>
                            <p className='text-blue-500'></p>
                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SignUp;