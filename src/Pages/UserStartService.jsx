import { useState, useEffect } from "react"

const UserStartService = () => {
    const [studentPrice, setStudentPrice] = useState(0);
    const [publicPrice, setPublicPrice] = useState(0);
    const taxPrice = 5;
    const othersCost = 0;
    const [totalPassenger, setTotalPassenger] = useState(1);
    const [selectedPlace, setSelectedPlace] = useState("");
    const [totalCost, setTotalCost] = useState(5);

    const handlePlaceChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedPlace(selectedValue);
        // Update studentPrice based on selectedValue
        if (selectedValue === "homna to goaribhanga") {
            setStudentPrice(10);
            setPublicPrice(15);
            
        }
        else if (selectedValue === "homna to batakandi") {
            setStudentPrice(20);
            setPublicPrice(30)
        }
        else {
            // Reset studentPrice if a different option is selected
            setStudentPrice(0);
            setPublicPrice(0)
        }
    };
    const handleMyWork = (e) => {
        const selectedValue = e.target.value;
        setSelectedPlace(selectedValue);
        // console.log(selectedPlace);
        if (selectedValue === "student") {
            setTotalCost(studentPrice + taxPrice )
            console.log(totalCost);
        }
        else if (selectedValue === "public"){
            setTotalCost(publicPrice + taxPrice )   
        }
    };

    const handleCarChange = (e) => {
        const selectedValue = e.target.value;
        // Adjust cost based on selected car
        if (selectedValue === 'রিক্সা') {
          setTotalCost(totalCost * 2); // Increase cost by 10%
        } else if (selectedValue === 'সিএনজি') {
          setTotalCost(totalCost * 2); // Increase cost by 15%
        }  else if (selectedValue === 'নসিমন যাত্রীবহনকারী গাড়ি') {
          setTotalCost(totalCost ); // Increase cost by 15%
        } else if (selectedValue === 'বাইক') {
          setTotalCost(totalCost * 3); // Increase cost by 15%
        } else   {
          setTotalCost(totalCost ); // Update cost for bus
        }
      };

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="text-white px-3 min-h-screen">
            <div className="lg:mx-auto mt-8 text-center">
                <p className="text-yellow-300 lg:text-xl ">
                    গাড়ির জন্য ঘন্টার পর ঘন্টা বসে না থেকে এখনই গাড়ি অর্ডার দিন।আর খুব সহজে পৌঁছে যান আপনার গন্তব্যে
                </p>
                <p className="lg:w-3/4 mx-auto lg:text-xl ">
                    তাই আর দেরি কিসের পছন্দ অনুযায়ী গাড়ি সিলেক্ট করে, সবগুলো তথ্য দিয়ে শুধু একবার যোগাযোগ করুন। আমরা আপনার সুবিধা অনুযায়ী যেকোনো সার্ভিস দিতে এগিয়ে যাবো সবসময়
                </p>
            </div>
            <form onSubmit={handleSubmit} className="lg:w-1/2 text-[14px] lg:text-[16px]  mx-auto my-8">
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
                    <select onChange={handlePlaceChange} className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="targetplace" name="targetplace">

                        <option value="null">এখানে ক্লিক করুন </option>

                        <option value="homna to goaribhanga">হোমনা থেকে গোয়ারিভাংঙ্গা </option>
                        <option value="homna to batakandi">হোমনা থেকে বাতাকান্দি</option>
                    </select>
                </div>
                <div className="my-2">
                    <label className="font-bold" htmlFor="choosecar">আপনার কোন ধরনের গাড়ি প্রয়োজন</label>
                    <select onch className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="choosecar" name="choosecar">
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

                <div className="flex gap-5">
                    <div className="my-2">
                        <label className="font-bold" htmlFor="my-work">আপনার পেশা</label>
                        <select onChange={handleMyWork} className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="my-work" name="my-work">
                            <option value="student">ছাত্র/ছাত্রী </option>
                            <option value="public">সাধারণ যাত্রী</option>
                        </select>
                    </div>
                    <div className="my-2">
                        <label className="font-bold" htmlFor="i-am">যাত্রী সংখ্যা</label>
                        <input value={1} readOnly className="bg-gray-700 w-1/2 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="number" name="i-am" id="i-am" placeholder="1" />
                    </div>

                </div>

                <p className="text-yellow-300">
                    আপনারা যদি একাধিক যাত্রী হন তাহলে এগুলো পূরণ করতে হবে*
                </p>
                <p>
                    তাদের পেশা ও যাত্রী সংখ্যা সিলেক্ট করুন
                </p>

                <div className="flex gap-3 lg:gap-8">
                    <div className="">
                        <label className="font-bold" htmlFor="student">তাদের পেশা</label>
                        <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="student" name="student">
                            <option value="student">ছাত্র/ছাত্রী </option>

                        </select>
                    </div>
                    <div className="my-2">
                        <label className="font-bold" htmlFor="student-number">ছাত্র/ছাত্রী সংখ্যা</label>
                        <input className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="number" name="student-number" id="student-number" placeholder="ছাত্র/ছাত্রী সংখ্যা লিখুন" />
                    </div>
                </div>

                <div className="flex gap-3 lg:gap-8">
                    <div className="">
                        <label className="font-bold" htmlFor="public">তাদের পেশা</label>
                        <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="public" name="public">
                            <option value="publice">সাধারণ যাত্রী</option>
                        </select>
                    </div>
                    <div className="my-2">
                        <label className="font-bold" htmlFor="public-number">যাত্রী সংখ্যা</label>
                        <input className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="number" name="public-number" id="public-number" placeholder="যাত্রী সংখ্যা লিখুন" />
                    </div>
                </div>

                <div className="bg-white lg:text-xl text-black px-4 rounded py-4">
                    <h3 className="mx-auto  text-center">আপনার হিসাব-নিকাশ</h3>
                    <div className="flex  justify-between">
                        <p className=" ">
                            একজন সাধারণ যাত্রী ভাড়া
                        </p> <span>{publicPrice} টাকা</span>
                    </div>
                    <div className="flex justify-between">
                        <p className="">
                            একজন ছাত্র/ছাত্রীর ভাড়া
                        </p> <span> {studentPrice} টাকা</span>
                    </div>
                    <div className="flex justify-between">
                        <p>মোট যাত্রীসংখ্যা</p> <span>{totalPassenger} জন</span>
                    </div>
                    <div className="flex justify-between">
                        <p>সার্ভিসজনিত ট্যাক্স/ভ্যাট</p> <span>{taxPrice} টাকা</span>
                    </div>
                    <div className="flex justify-between">
                        <p>অন্যান্য খরচ</p> <span> {othersCost} টাকা</span>
                    </div>
                    <div className="flex justify-between">
                        <p>সর্বমোট খরচ</p> <span> {totalCost} টাকা</span>
                    </div>
                </div>

                <div className="mx-auto  text-center">
                    <div className='bg-emerald-950 mx-auto text-center  to-yellow-300 mt-5 p-2 rounded-md font-semibold cursor-pointer '>
                        <input className=' lg:w-[350px] text-center mx-auto font-bold text-white cursor-pointer' type="submit" value="সাবমিট করুন" />
                    </div>
                </div>
            </form>

        </div>
    )
}
export default UserStartService;