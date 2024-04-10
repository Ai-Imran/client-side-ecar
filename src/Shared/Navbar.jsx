import { Link, NavLink } from "react-router-dom";
import './style.css'
import { RiMenuUnfoldLine } from "react-icons/ri";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex flex-row-reverse justify-between ">
                    {/* <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn text-white btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu  menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52">
                           
                        </ul>
                    </div> */}
                    <div className="drawer drawer-end">
                     <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                     <div className="drawer-content">
                       {/* Page content here */}
                       <label htmlFor="my-drawer-4" className="drawer-button text-white text-4xl "><RiMenuUnfoldLine className="ml-[140px]"/></label>
                     </div> 
                     <div className="drawer-side">
                       <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                       <ul className="menu backimage space-y-6 p-4 w-3/4 min-h-full  text-base-content">
                         {/* Sidebar content here */}
                         <NavLink to={'/'}>হোম</NavLink>
                       <NavLink>সার্ভিস শুরু করুন</NavLink>
                       <NavLink>যোগাযােগ</NavLink>
                       <NavLink>আপনার সমস্যা</NavLink>
                       <NavLink>আমাদের সহায়তা</NavLink>
                       <NavLink>আমাদের সর্ম্পকে</NavLink>
                        <NavLink>লগইন করুন</NavLink>
                       </ul>
                     </div>
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

                       </ul>
                </div>
               
            </div>
        </div>
    );
};

export default Navbar;