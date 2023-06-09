import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../assets/login.png"

// import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
// import SocialLogin from "../Shared/SocialLogin/SocialLogin";



const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: 'User Logged In Successfully',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                });
                navigate(from, { replace: true });
            })
    }

    return (
        <div className="py-20">
            <Helmet>
                <title>Sports Lounge | Login</title>
            </Helmet>
            <h2 className='text-5xl text-yellow-600  font-bold text-center'>Login</h2>
            <div className=" md:flex md:justify-between w-full">
                <div className="w-1/2 h-1/2 mx-auto">
                    <img src={img} alt="" />
                </div>
                <div className="w-1/2 h-1/2 mx-auto">

                    <div className=' flex flex-col justify-center'>
                        <form onSubmit={handleLogin} className='max-w-[400px] w-full mx-auto rounded-lg shadow-xl p-8 px-8'>

                            <div className='flex flex-col py-2'>
                                <label>Email Address</label>
                                <input className='rounded-lg border p-2 focus:border-yellow-500 focus:outline-none' type="text" name='email' required />
                            </div>
                            <div className='flex flex-col py-2'>
                                <label>Password</label>
                                <input className='p-2 rounded-lg border mt-2 focus:border-yellow-500 focus:outline-none' type="password" name='password' required />
                            </div>
                            {/* TODO:make button disabled for captcha */}
                            <div className="form-control">

                                <input disabled={false} className='w-full my-4 btn btn-warning' type="submit" value="Login" />


                                <p className='text-center'>Do not have an account? <Link className='text-blue-500' to='/signup'>Sign Up</Link></p>
                            </div>

                            <SocialLogin></SocialLogin>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;