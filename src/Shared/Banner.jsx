
import img from '../assets/3643906.jpg';
import img1 from '../assets/3619803.jpg';
import './style.css';
import { FaFacebookMessenger, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import imo from '../assets/imo.png'
import car3 from '../assets/car3.jpg'
import { FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className='backimage -mt-16 pb-16'>
            <div className="flex w-full mb-32 justify-center items-center pt-32">
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
                            <p className="font-semibold text-xl">
                                01906951915 <br /> 01814189243
                            </p>
                        </div>
                        <div className="divider divider-secondary my-8"> অথবা </div>
                        <div className="flex ml-32 text-4xl gap-8">
                            <FaFacebook />
                            <FaFacebookMessenger/>
                            <FaTwitter />
                            <FaInstagram />
                        </div>
                    </div>
                </div>
                <div className="p-8 w-1/2">
                    <img className='rounded-lg' src={img} alt="" />

                </div>
            </div>
            {/* why our services */}
            <div className="flex ">
                 <div className='w-1/2 p-8 '>
                    <img className='rounded-lg' src={car3} alt="" />
                </div>
                <div className='w-1/2 text-center text-white ‍'>
                    <h2 className="text-4xl mt-4 tracking-wider">
                        রাইড শেয়ারিং কি এবং <br /> আপনি আমাদের কাছ থেকে <br /> কেন সার্ভিসটি নিবেন
                    </h2>
                    <h3 className="font-bold text-2xl underline mt-4 mb-2"> রাইড শেয়ারিং </h3>
                    <p className='px-4 text-justify mb-8 text-gray-300'>
                        রাইড শেয়ারিং হলো এমন এক পন্থা, যেখানে ওয়েবসাইট বা অ্যাপের মাধ্যমে গাড়ী ও যাত্রীর মধ্যে যোগাযোগ স্থাপন করে। একজন যাত্রী কোথাও যাবেন, যাওয়ার আগে রাইডশেয়ারিং কোম্পানির ওয়েবসাইট বা এপে তার অবস্থান এবং গন্তব্যস্থল প্রদান করার পর সেই এপ বা ওয়েবসাইট যাত্রীর আশেপাশে একটি নির্দিষ্ট সীমার মধ্যে গাড়ি খুজতে থাকে যারা রাইডশেয়ারিং এর সাথে জড়িত। রাইডশেয়ারিং এর গাড়িগুলোর চালকের মধ্য থেকে যে রাইড পিক করবে, রাইডশেয়ারিং কোম্পানির ওয়েবসাইট বা এপ সেই গাড়ির সাথে যাত্রীর যোগাযোগ স্থাপন করে দিবে। গাড়িটি তখন যাত্রির অবস্থানে এসে পৌছে যাত্রীকে নিয়ে তার গন্তব্যে পৌছে দিবে। রাইডশেয়ারিং কোম্পানি মূলত এভাবেই কাজ করে। তারা যাত্রী ও গাড়ির মধ্যে সেতুর মত কাজ করে।

                    </p>
                    <h3 className="font-semibold mb-2  text-xl text-orange-400">আপনি আমাদের কাছ থেকে  কেন সার্ভিসটি নিবেন</h3>
                    <p className='text-gray-200'>
                        1 . সবচেয়ে অল্প খরচে একমাত্র আমরাই সার্ভিস দিয়ে থাকি । <br />

                        2 . কোনোরকম এ্যাপের ঝামেলা ছাড়াই সরাসরি কল করার মাধ্যমে ড্রাইভার পাবেন দ্রুত । <br />
                        3 . আপনার যেখানে খুশি সেখানেই যেতে পারবেন । <br />
                        4 . আপনি চাইলে ঘন্টা হিসেবেও নিতে পারেন । <br />

                        5 . গাড়ির জন্য অপেক্ষা না করে আমাদের সাথে যোগাযোগ করুন । আর যাত্রা শুরু করুন দ্রুত  । <br />
                        6 . গাড়িতে বসে কোনোরকম ঝামেলায় পড়লে অথবা কোনো  অসুবিধা হলে আমাদের <br /> সাথে যোগাযোগ করুন। <br />
                        7 . এছাড়াও আপনাদের ইচ্ছাঅনুযায়ী যেকোনো সুবিধা একমাত্র আমরাই দিয়ে থাকি ।
                    </p>

                </div>
               
            </div>
            {/* passer by */}
            <div className="flex my-20">
                <div className='w-1/2 text-gray-300'>
                <h2 className="font-bold text-white text-center text-3xl">
                আমি একজন যাত্রী । এখন আমি কীভাবে আপনাদের সার্ভিসটি নিতে পারি ?
                </h2>
                <p>
                    আপনি যদি আপনার অফিসে অথবা দূরে কোথা্ও যা্ওয়ার জন্য কোনো গাড়ি খুজতেছেন । অথবা ইমার্জেন্সি 
                </p>
                
                </div>
                <div className='w-1/2 p-8'>
                <img className='rounded-lg' src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};



export default Banner;