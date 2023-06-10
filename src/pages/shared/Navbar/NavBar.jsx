import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../components/hooks/UseCart";

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart]= useCart()
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    const navItems =
        <>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-yellow-500 text-lg font-semibold underline' : 'text-lg')}> <li><a>Home</a></li> </NavLink>

            <NavLink to='/instructor' className={({ isActive }) => (isActive ? 'text-yellow-500 text-lg font-semibold underline' : 'text-lg')}> <li><a>Instructors</a></li> </NavLink>


            <NavLink to='/classes' className={({ isActive }) => (isActive ? 'text-yellow-500 text-lg font-semibold underline' : 'text-lg')}> <li><a>Classes</a></li> </NavLink>

            <NavLink className="p-2" to="/dashboard/mycart">
                <button className="btn btn-warning btn-outline btn-sm gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-warning">+{cart?.length || 0}</div>
                </button>
            </NavLink>


            {user && <NavLink to='/dashboard' className={({ isActive }) => (isActive ? 'text-yellow-500 text-lg font-semibold underline' : 'text-lg')}> <li><a>Dashboard</a></li> </NavLink>}
        </>

    return (
        <div className="navbar fixed z-40 bg-black bg-opacity-40 glass px-16 text-white shadow py-3 max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-lg glass rounded text-black bg-white w-52">
                        {navItems}
                    </ul>
                </div>
                <NavLink to='/'></NavLink>

                <NavLink to='/'><p className="font-bold text-xl">TheSportsLounge</p></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                {user && (
                    <div className="relative inline-block mx-4">
                        <img src={user.photoURL} alt="Profile" className="rounded-full h-12 w-12 cursor-pointer hover:opacity-90" title={user.displayName} />
                    </div>
                )}

                {user ? <NavLink>
                    <button onClick={handleLogOut}>Log Out</button>
                </NavLink> :
                    <NavLink to='/login'>
                        <button className="btn btn-warning">Login</button>
                    </NavLink>}
            </div>
        </div>
    );
};

export default NavBar;