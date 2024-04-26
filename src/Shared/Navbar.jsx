import { Link, NavLink } from "react-router-dom";
import './style.css'
import { AiFillHome } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Navbar = () => {

    const {user,logOut} = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
    }
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
                        <NavLink to={'/'} ink="true">হোম</NavLink>
                        {
                            user ? <NavLink to={'/user-start'}>শুরু করুন</NavLink> : <NavLink to={'/startSerives'}>সার্ভিস দেখুন</NavLink>
                        }
                       
                       <NavLink to={'/contact'}>যোগাযােগ</NavLink>
                       <NavLink to={'/problem'}>আপনার সমস্যা</NavLink>
                       <NavLink to={'/help'}>আমাদের সহায়তা</NavLink>
                       <NavLink to={'/ourSelf'}>আমাদের সর্ম্পকে</NavLink>
                       {
                        user ? <span onClick={handleLogout} className="text-yellow-500">Logout</span> :  <NavLink to={'/login'}>লগইন করুন</NavLink>
                       }
                     </ul>
                     </div>
                     
                </div>

                    <Link to={'/'} className=" text-lime-500 hover:shadow-xl hover:text-lime-300 text-3xl">IsmaqW</Link>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu space-x-4 text-[18px] ml-10 font-bold menu-horizontal px-1">
                       <NavLink to={'/'} ink="true">হোম</NavLink>
                       <NavLink to={'/user-start'}>শুরু করুন</NavLink>
                       <NavLink to={'/startSerives'}>সার্ভিস দেখুন</NavLink>
                       <NavLink to={'/contact'}>যোগাযােগ</NavLink>
                       <NavLink to={'/problem'}>আপনার সমস্যা</NavLink>
                       <NavLink to={'/help'}>আমাদের সহায়তা</NavLink>
                       <NavLink to={'/ourSelf'}>আমাদের সর্ম্পকে</NavLink>
                       <span className="text-purple-400">{user?.displayName}</span>
                       {
                        user ? <span onClick={handleLogout} className="text-yellow-500">Logout</span> :  <NavLink to={'/login'}>লগইন করুন</NavLink>
                       }

                       </ul>
                </div>
               
            </div>

            <div className="grid  justify-items-center text-white grid-cols-5 lg:hidden text-3xl mt-1">
                <NavLink to={'/'} ink="true"><AiFillHome className=" transition delay-100" /></NavLink>
                <NavLink  to={'/contact'}><FaFacebookMessenger className=" transition delay-100"/></NavLink>
               {
                user ?  <NavLink to={'/user-start'}><FaCarSide className=" transition delay-100" /></NavLink> :  <NavLink to={'/startSerives'}><FaCarSide className=" transition delay-100" /></NavLink>
               }
                <NavLink to={'/problem'}><BsSendFill className=" transition delay-100"/></NavLink>
                <label htmlFor="my-drawer-4" className="drawer-button text-white text-3xl ">  <FaUser className="transition delay-100 hover:text-purple-600"/></label>
      
                
             </div>
             
        </div>
    );
};

export default Navbar;