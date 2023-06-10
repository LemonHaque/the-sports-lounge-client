
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../../components/hooks/UseCart";
import { FaBook, FaCalendarAlt, FaHome, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const DashBoard = () => {
    const [cart] = useCart();
    const { user } = useContext(AuthContext)

    // TODO: load data from the server to have dynamic isadmin based on data
    // const isAdmin = true;
    // const [isAdmin] = useAdmin();

    return (
        <div className="drawer">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="w-full navbar glass bg-black bg-opacity-30">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-1 px-2 mx-2">TheSportsLounge</div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}

                            <li><NavLink to="/"><FaHome></FaHome>Back to Home</NavLink></li>
                            <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome>Admin Home</NavLink></li>
                            <li><NavLink to="/dashboard/additem"><FaUtensils></FaUtensils> Add An Class</NavLink></li>
                            <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers>All Users</NavLink></li>
                            <li><NavLink to="/dashboard/userhome"><FaHome></FaHome>User Home</NavLink></li>
                            <li><NavLink to="/dashboard/enrolled"><FaCalendarAlt></FaCalendarAlt>Enrolled Classes</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
                            <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                                <span className="badge badge-warning">+{cart?.length || 0}</span> </NavLink> </li>
                        </ul>

                    </div>
                </div>
                {/* Page content here */}
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu px-4 py-8 gap-3 w-60 glass h-full bg-black bg-opacity-30">
                    {/* Sidebar content here */}
                    {
                        user && <> <li className="mx-auto"> <img src={user.photoURL} alt="Profile" className="rounded-full h-12 w-12 cursor-pointer hover:opacity-90" title={user.displayName} /></li>
                            <li className="mx-auto font-semibold text-lg">{user.displayName}</li>
                            <li>{user.email}</li>
                        </>
                    }
                    <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome>Admin Home</NavLink></li>
                    <li><NavLink to="/dashboard/additem"><FaUtensils></FaUtensils> Add An Class</NavLink></li>
                    <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers>All Users</NavLink></li>
                    <li><NavLink to="/dashboard/userhome"><FaHome></FaHome>User Home</NavLink></li>
                    <li><NavLink to="/dashboard/enrolled"><FaCalendarAlt></FaCalendarAlt>Enrolled Classes</NavLink></li>
                    <li><NavLink to="/dashboard/history"><FaWallet></FaWallet>Payment History</NavLink></li>
                    <li><NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
                        <span className="badge badge-warning">+{cart?.length || 0}</span> </NavLink> </li>
                        <div className="divider"></div>
                        <li><NavLink to="/"><FaHome></FaHome>Back to Home</NavLink></li>
                </ul>
               

            </div>
        </div>
    );
};

export default DashBoard;