import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendar, FaHome, FaListOl, FaPizzaSlice, FaUtensils, FaBook,  FaUsers } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';




const DashBoard = () => {

    const [cart] = useCart();

    // TODO : load data from the server to have dynamic isAdmin based on the Server 
    // const isAdmin = true;
    const [isAdmin] = useAdmin();

    return (
        <div className="drawer lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                {/* Page content here */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side bg-[#F7A582]">

                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full  ">

                    {
                        isAdmin ?
                            <>
                                <li><NavLink to='/dashboard/home'><FaHome></FaHome>Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils>Add Items</NavLink></li>
                                <li><NavLink to='/dashboard/mycart'><FaListOl></FaListOl>Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/history'> <FaBook></FaBook>Manage Bookings</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'> <FaUsers></FaUsers>All Users</NavLink></li>
                            </>
                            :
                            <>
                                <li><NavLink to='/dashboard/home'><FaHome></FaHome>User Home</NavLink></li>
                                <li><NavLink to='/dashboard/reservations'><FaCalendar></FaCalendar>Reservations</NavLink></li>
                                <li><NavLink to='/dashboard/mycart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
                            </>
                    }



                    <div className="divider"></div>

                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/menu"><FaListOl></FaListOl>Menu</NavLink></li>
                    <li><NavLink to='/order/salad'><FaPizzaSlice></FaPizzaSlice>Order Food</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;