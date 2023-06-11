import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();


    if (loading) {
        return <div className="text-center w-1/2 mx-auto my-20">
            <progress className="progress w-56 h-5"></progress>
            <p className="font-semibold my-5 text-2xl">Loading....</p>
            <Link to='/' className='btn w-2/3 btn-warning
                 font-semibold my-4'>
                        Back to Home
                    </Link>
        </div>
        
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;