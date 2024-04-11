import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import './style.css'


const Main = () => {
    return (
        <div className="backimage">
           <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Main;