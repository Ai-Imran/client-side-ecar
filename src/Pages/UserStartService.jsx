
const UserStartService = () => {

    return (
        <div className="text-white px-3 min-h-screen">
            <div className="lg:mx-auto mt-8 text-center">
                <p className="text-yellow-300 lg:text-2xl text-xl">
                গাড়ির জন্য ঘন্টার পর ঘন্টা বসে না থেকে এখনই গাড়ি অর্ডার দিন।আর খুব সহজে পৌঁছে যান আপনার গন্তব্যে
                </p>
                <p className="lg:w-3/4 mx-auto lg:text-2xl text-xl">
                তাই আর দেরি কিসের পছন্দ অনুযায়ী গাড়ি সিলেক্ট করে, সবগুলো তথ্য দিয়ে শুধু একবার যোগাযোগ করুন। আমরা আপনার সুবিধা অনুযায়ী যেকোনো সার্ভিস দিতে এগিয়ে যাবো সবসময়
                </p>
            </div>
            <form className="lg:w-1/2  mx-auto my-8">
                <div className="my-2">
                <label className="font-bold" htmlFor="name">আপনার নাম লিখুন</label>
                <input required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="text" name="name" placeholder="এখানে আপনার নাম লিখুন" />
                 </div>
                 <div className="my-2">
                <label className="font-bold" htmlFor="mobile-number">আপনার মোবাইল নাম্বার </label>
                <input required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="number" name="mobile-number" placeholder="এখানে আপনার নাম লিখুন" />
                 </div>
                 <div className="my-2">
                <label className="font-bold" htmlFor="email">আপনার ইমেইল লিখুন</label>
                <input required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="email" name="email" placeholder="এখানে আপনার ইমেইল লিখুন" />
                 </div>
                <div className="my-2">  
                <label className="font-bold" htmlFor="targetplace">আপনি কোথায় থেকে কোথায় যেতে চান</label>              
                <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="targetplace" name="targetplace">
                <option value="অটো গাড়ি">অটো গাড়ি</option>
                <option value="রিক্সা">রিক্সা</option>              
                </select>
                </div>
                 <div className="my-2">  
                <label className="font-bold" htmlFor="choosecar">আপনার কোন ধরনের গাড়ি প্রয়োজন</label>              
                <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="choosecar" name="choosecar">
                <option value="অটো গাড়ি">অটো গাড়ি</option>
                <option value="রিক্সা">রিক্সা</option>
                <option value="সিএনজি">সিএনজি</option>
                <option value="ভ্যান">ভ্যান</option>
                <option value="বাইক">বাইক</option>
                <option value="সাইকেল">সাইকেল</option>
                <option value="নসিমন মালবহনকারী গাড়ি ">নসিমন মালবহনকারী গাড়ি </option>
                <option value="নসিমন যাত্রীবহনকারী গাড়ি">নসিমন যাত্রীবহনকারী গাড়ি</option>
                <option value="মাইক্রো গাড়ি">মাইক্রো গাড়ি</option>
                <option value="হাইব্রিড গাড়ি">হাইব্রিড গাড়ি</option>
                <option value="বাস">বাস</option>
                <option value="ট্রাক">ট্রাক</option>
                <option value="বেকু">বেকু</option>
                <option value="অন্যান্য">অন্যান্য</option>
                </select>
                </div>
               
                <div className="my-2">
                <label className="font-bold" htmlFor="car-number">আপনার কয়টি গাড়ি প্রয়োজন</label>
                <input required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="number" name="car-number" id="car-number" placeholder="গাড়ির সংখ্যা লিখুন" />
                 </div>
                 <div className="my-2">  
                <label className="font-bold" htmlFor="my-work">আপনার পেশা / আপনি কি কাজ করেন?</label>              
                <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="my-work" name="my-work">
                <option value="অটো গাড়ি">অটো গাড়ি</option>
                <option value="রিক্সা">রিক্সা</option>              
                </select>
                </div>
               
                <p className="text-yellow-300">
                আপনারা যদি একাধিক যাত্রী হন তাহলে এগুলো পূরণ করতে হবে*
                </p>
                <p>
                তাদের পেশা ও যাত্রী সংখ্যা সিলেক্ট করুন
                </p>
                <p className="text-yellow-300 mt-3">
                একজন ছাত্র/ছাত্রীর ভাড়া ১০ টাকা
                </p>
                <div className="flex gap-3 lg:gap-8">
                <div className="">  
                <label className="font-bold" htmlFor="student">তাদের পেশা</label>              
                <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="student" name="student">
                <option value="অটো গাড়ি">ছাত্র/ছাত্রী </option>
                             
                </select>
                </div>
                <div className="my-2">
                <label className="font-bold" htmlFor="student-number">ছাত্র/ছাত্রী সংখ্যা</label>
                <input required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="number" name="student-number" id="student-number" placeholder="ছাত্র/ছাত্রী সংখ্যা লিখুন" />
                 </div>
                </div>
                <p className="text-yellow-300 mt-2">
                একজন সাধারণ যাত্রীর ভাড়া ১০ টাকা
                </p>
                <div className="flex gap-3 lg:gap-8">
                <div className="">                 
                <label className="font-bold" htmlFor="public">তাদের পেশা</label>              
                <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="public" name="public">
                <option value="সাধারণ যাত্রী">সাধারণ যাত্রী</option>
                </select>
                </div>
                <div className="my-2">
                <label className="font-bold" htmlFor="public-number">যাত্রী সংখ্যা</label>
                <input required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="number" name="public-number" id="public-number" placeholder="যাত্রী সংখ্যা লিখুন" />
                 </div>
                </div>
                <div className="mx-auto  text-center">
                    <div className='bg-gradient-to-r from-purple-600 via-red-600 mx-auto text-center  to-yellow-300 mt-5 p-2 rounded-md font-semibold cursor-pointer '>
                 <input className=' lg:w-[350px] text-center mx-auto font-bold text-white cursor-pointer' type="submit" value="সাবমিট করুন" />
                    </div>
                  </div>
            </form>

        </div>
    )
}
export default UserStartService;