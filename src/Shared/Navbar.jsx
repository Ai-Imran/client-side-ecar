import { Link, NavLink } from "react-router-dom";
import './style.css'
import { RiMenuUnfoldLine } from "react-icons/ri";
import { AiFillHome } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";

const Navbar = () => {
    return (
        <div >
            <div className="navbar pt-1 md:pt-8">
                <div className="flex flex-row-reverse justify-between ">
                    
                    <div className="drawer lg:hidden drawer-end">
                     <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                     <div className="drawer-content">
                       {/* Page content here */}
                       <img className="text-white  absolute" src="" alt="fdfdf" />
{/* 
                       <label htmlFor="my-drawer-4" className="drawer-button text-white text-4xl ">  <RiMenuUnfoldLine className="ml-[140px]"/></label> */}
                     </div> 
                     <div className="drawer-side">
                       <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                       
                       <ul className="menu backimage space-y-6 p-4 w-3/4 min-h-full text-xl font-bold text-base-content">
                         {/* Sidebar content here */}
                        <img className="text-white" src="" alt="fdfdf" />
                        <NavLink to={'/'}>হোম</NavLink>
                       <NavLink to={'/startSerives'}>সার্ভিস দেখুন</NavLink>
                       <NavLink to={'/contact'}>যোগাযােগ</NavLink>
                       <NavLink to={'/problem'}>আপনার সমস্যা</NavLink>
                       <NavLink to={'/help'}>আমাদের সহায়তা</NavLink>
                       <NavLink to={'/ourSelf'}>আমাদের সর্ম্পকে</NavLink>
                        <NavLink to={'/login'}>লগইন করুন</NavLink>
                     </ul>
                     </div>
                     
                </div>

                    <Link to={'/'} className="btn text-lime-500 btn-ghost text-3xl">E-Car</Link>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu space-x-6 text-[22px] ml-16 font-bold menu-horizontal px-1">
                       <NavLink to={'/'}>হোম</NavLink>
                       <NavLink to={'/startSerives'}>সার্ভিস দেখুন</NavLink>
                       <NavLink to={'/contact'}>যোগাযােগ</NavLink>
                       <NavLink to={'/problem'}>আপনার সমস্যা</NavLink>
                       <NavLink to={'/help'}>আমাদের সহায়তা</NavLink>
                       <NavLink to={'/ourSelf'}>আমাদের সর্ম্পকে</NavLink>
                        <NavLink to={'/login'}>লগইন করুন</NavLink>

                       </ul>
                </div>
               
            </div>

            <div className="grid  justify-items-center text-white grid-cols-5 lg:hidden text-3xl mt-1">
                <NavLink to={'/'}><AiFillHome className=" transition delay-100" /></NavLink>
                <NavLink  to={'/contact'}><FaFacebookMessenger className=" transition delay-100"/></NavLink>
                <NavLink to={'/startSerives'}><FaCarSide className=" transition delay-100" /></NavLink>
                <NavLink to={'/problem'}><BsSendFill className=" transition delay-100"/></NavLink>
                <label htmlFor="my-drawer-4" className="drawer-button text-white text-3xl ">  <FaUser className="transition delay-100 hover:text-purple-600"/></label>
      
                
             </div>
             
        </div>
    );
};

export default Navbar;