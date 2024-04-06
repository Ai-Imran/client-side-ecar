import img from '../assets/3643906.jpg'
import './style.css';
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import imo from '../assets/imo.png'
import { FaTwitter,FaFacebook, FaInstagram } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className='backimage -mt-16 h-[580px]'>
            <div className="flex w-full justify-center items-center pt-16">
                <div className='text-white text-center mx-auto w-1/2'>
                    <h1 className='text-4xl '>
                        বাংলাদেশের মধ্যে <br /> অন্যতম রাইড শেয়ারিং সার্ভিস
                    </h1>
                    <h1 className='w-3/4 ml-20 my-6 text-center '>
                        আপনি যদি কোনােরকম ঝামেলা ছাড়াই স্বল্প মূল্যেে আপনার নির্দিষ্ট গন্তব্যে পৌঁছাতে চান । তাহলে আর দেরি না করে আমাদের সাথে সরাসরি যোগাযোগ করুন ।
                    </h1>
                    <div className='border px-8 py-10 border-lime-500 w-3/4 mx-auto'>
                        <div className="flex justify-center gap-10">
                          
                             <div className="flex  text-4xl gap-8">
                                <FaPhoneAlt />

                                <FaWhatsapp />
                                <img className='w-10 h-10' src={imo} alt="" />
                            </div>
                            <p className="font-bold text-xl">
                                01906951915 <br /> 01814189243
                            </p>
                        </div>
                        <div className="divider divider-secondary my-8"> অথবা </div>
                        <div className="flex ml-32 text-4xl gap-8">
                            <FaFacebook/>
                            <FaTwitter/>
                            <FaInstagram/>
                        </div>
                    </div>
                </div>
                <div className="p-8 w-1/2">
                    <img className='rounded-lg' src={img} alt="" />

                </div>
            </div>
        </div>
    );
};

export default Banner;