import { Outlet, useNavigate, } from "react-router-dom";
import { useState } from "react";
import passenger from '../assets/passenger.png';
import driver from '../assets/driver.jpeg';


const Signup = () => {
  const navigate = useNavigate();
  const [selection, setSelection] = useState('একাউন্ট খুলতে উপরের যেকোনো একটি সিলেক্ট করুন । আপনি যদি যাত্রী হয়ে থাকেন তাহলে যাত্রী সিলেক্ট করুন আর যদি ড্রাইভার হয়ে থাকেন তাহলে ড্রাইভার সিলেক্ট করুন।');

  const handlePassengerClick = () => {
    navigate("/signup/passenger");
    setSelection('আপনি একজন যাত্রী হিসেবে একাউন্ট খুলতেছেন ')
  };

  const handleDriverClick = () => {
    navigate("/signup/driver");
    setSelection('আপনি একজন ড্রাইভার হিসেবে একাউন্ট খুলতেছেন ')
  };

  return (
    <div className="text-gray-300 min-h-screen">
       
      <div className="lg:flex gap-10">
        <div className="w-1/4 px-6">
        <p className="text-center my-4 text-white font-bold text-xl">আপনি কি হিসেবে একাউন্ট খুলতে চান (যাত্রী / ড্রাইভার) তা সিলেক্ট করুন।</p>
          <div className="lg:mb-6 hover:border-lime-500 hover:border rounded-md cursor-pointer  px-4 py-4" onClick={handlePassengerClick}>
            <div className="">
                <img className="w-[270px] text-center mx-auto rounded h-[200px]" src={passenger} alt="passenger image" />
                <p className="font-bold mt-4 px-1 text-white text-xl">
                আমি একজন যাত্রী হিসেবে একাউন্ট খুলতে চাই।
                </p>
            </div>
          </div>
          <div className="lg:mb-6 hover:border-lime-500 hover:border rounded-md cursor-pointer  px-4 py-4" onClick={handleDriverClick}>
          <div className="">
                <img className="w-[270px] text-center mx-auto rounded h-[200px]" src={driver} alt="driver image" />
                <p className="font-bold mt-4 px-1 text-white text-xl">
                আমি একজন ড্রাইভার হিসেবে একাউন্ট খুলতে চাই।
                </p>
            </div>
          </div>
        </div>
        <div className="w-3/4">
            <p className="text-white text-center text-xl font-bold">
                {selection}
            </p>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Signup;
