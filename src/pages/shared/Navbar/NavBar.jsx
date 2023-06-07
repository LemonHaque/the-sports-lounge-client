import { NavLink } from "react-router-dom";

const NavBar = () => {
    // const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }



    const navItems =
        <>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-primary text-lg font-semibold' : '')}> <li><a>Home</a></li> </NavLink>

            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-primary text-lg font-semibold' : '')}> <li><a>Instructor</a></li> </NavLink>


            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-primary text-lg font-semibold' : '')}> <li><a>Classes</a></li> </NavLink>

            <NavLink to='/' className={({ isActive }) => (isActive ? 'text-primary text-lg font-semibold' : '')}> <li><a>Dashboard</a></li> </NavLink>
        </>



    return (
        <div className="navbar fixed z-10 bg-blue-600 bg-opacity-30 px-16 shadow py-3 max-w-screen-2xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow text-lg rounded-box  w-52">
                        {navItems}
                    </ul>
                </div>
                <NavLink to='/'></NavLink>

                <NavLink to='/'><p className="font-bold text-xl">The Sports Lounge</p></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>


            <div className="navbar-end gap-5">

                <div className="relative inline-block mx-4">
                    <img src='' alt="Profile" className="rounded-full h-12 w-12 cursor-pointer hover:opacity-90" title='' />
                </div>


                <NavLink>
                    <button onClick={handleLogOut}>Log Out</button>
                </NavLink>
                <NavLink to='/login'>
                    <button className="btn btn-primary">Login</button>
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;