import { Link, NavLink } from "react-router-dom";
import './style.css'

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                           
                        </ul>
                    </div>
                    <Link to={'/'} className="btn text-lime-500 btn-ghost text-3xl">E-Car</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu space-x-6 text-[18px] font-bold menu-horizontal px-1">
                       <NavLink to={'/'}>হোম</NavLink>
                       <NavLink>সার্ভিস শুরু করুন</NavLink>
                       <NavLink>যোগাযােগ</NavLink>
                       <NavLink>আপনার সমস্যা</NavLink>
                       <NavLink>আমাদের সহায়তা</NavLink>
                       <NavLink>আমাদের সর্ম্পকে</NavLink>
                        <NavLink>লগইন করুন</NavLink>

                       {/* <NavLink>Home</NavLink>
                       <NavLink>Services</NavLink>
                       <NavLink>About</NavLink>
                       <NavLink>Contact Us</NavLink>
                       <NavLink>Help</NavLink>
                       <NavLink>Login</NavLink> */}
                    </ul>
                </div>
               
            </div>
        </div>
    );
};

export default Navbar;