import { Link, NavLink } from "react-router-dom";
import './style.css'
import { AiFillHome } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaCarSide } from "react-icons/fa";
import { BsSendFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import RandomColorText from "./RandomColorText";

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
                       <div className=" ml-[165px]">
                       {
                            user && <>
                             <img className="text-white w-[60px] h-[60px] border shadow-2xl border-purple-400 rounded" src={user?.photoURL} alt="user Photo" />
                            </>
                        }
                       </div>

                     </div> 
                     <div className="drawer-side">
                       <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                       
                       <ul className="menu backimage space-y-6 p-4 w-3/4 min-h-full text-xl font-bold text-base-content">
                         {/* Sidebar content here */}
                        <div className="text-white">
                       {
                        user && <>
                         <img className="text-white rounded-sm  mx-auto" src={user?.photoURL} alt="user photo" />
                         <p className="text-lime-400">{user?.displayName}</p>
                        </>
                       }
                        </div>
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
                {/* <div className="border p-2 border-dashed ml-3 text-shadow rounded-full border:animate-spin"> <RandomColorText className="bg-green-500 " text={'0'}/> </div> */}

                    <Link to={'/'} className=" ml-3 rounded font-serif text-stone-300 px-1 text-shadow hover:text-lime-300 shad text-3xl" >Ismaqw</Link>
                </div>
                <div className="navbar-center  hidden lg:flex">
                    <ul className="menu space-x-4 text-[18px]  ml-10 font-bold menu-horizontal px-1">
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
                        {
                            user && <img className="text-white w-[60px] h-[60px] -mt-5 rounded-full" src={user?.photoURL} alt="user Photo" />
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