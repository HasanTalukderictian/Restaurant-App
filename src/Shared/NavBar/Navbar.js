import React, { useContext } from 'react';
import imgIcon from '../../assests/logo.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2'
import { FaShoppingCart } from 'react-icons/fa';
import useCart from '../../hooks/useCart';
import useAdmin from '../../hooks/useAdmin';

const Navbar = () => {

    const { user, logout } = useContext(AuthContext);

    const [cart ] = useCart();
    const [isAdmin] = useAdmin();

    const handleLogOut = () => {

        logout()
            .then(() => { })
            .catch(error => console.log(error));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const navOption = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Our Menu</Link></li>
        <li><Link to='/order/salad'>Oder Food</Link></li>
        <li><Link to='/contact'>Contact Us</Link></li>
        <li><Link to={isAdmin ? '/dashboard/adminhome' : '/dashboard/userhome'}>DashBoard</Link></li>
        <li>
            <Link to='/dashboard/mycart'>
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">{cart?.length || 0}</div>
                </button>
            </Link>
        </li>


        {

            user ? <>
                {/* <span>{user?.displayName}</span> */}


                <button onClick={handleLogOut} className="btn btn-outline btn-accent">LogOut</button> </>
                :
                <> <li><Link to='/login'>Login</Link></li></>
        }



    </>
    return (
        <>
            <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navOption}
                        </ul>
                    </div>
                    <img src={imgIcon} className='w-15 h-11' alt="" />
                    <a className="btn btn-ghost normal-case text-xl">Baton Rouge</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end px-20">
                    <a className="btn">Button</a>
                </div>
            </div>
        </>
    );
};

export default Navbar;