import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const Driver = () => {

    // image size validate
    const [errorMessage, setErrorMessage] = useState('');
    // password
    const [show, setShow] = useState(false);
    const [phoneNumber, setPhoneNumber] = useState('');
  const [errornumber, setErrornumber] = useState('');

  const handleInputChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.name.value;
    const phoneNumber = event.target.number.value;
    const email = event.target.email.value;
    const age = event.target.year.value;
    const gender = event.target.gender.value;
    const address = event.target.address.value;
    const vehicle = event.target.gender.value; // Changed to vehicle
    const drivingDay = event.target.drivingday.value;
    const earnings = event.target.earnings.value;
    const experience = event.target.exprience.value; // Corrected from exprience to experience
    const carOwner = event.target.carowner.value;
    const license = event.target.licence.value;
    const photoFile = event.target.photo.files[0]?.name;
    const password = event.target.password.value;
    // console.log(name,

    //     phoneNumber,
    //     email,
    //     age,
    //     gender,
    //     address,
    //     vehicle,
    //     drivingDay,
    //     earnings,
    //     experience,
    //     carOwner,
    //     license,
    //     photoFile,
    //     password,);

    // Regular expression to match Bangladeshi phone numbers

    const bdPhoneNumberPattern = /^(?:\+?88|0088)?01[3-9]\d{8}$/;
    if (!bdPhoneNumberPattern.test(phoneNumber)) {
        setErrornumber('এটি একটি বাংলাদেশী ফোন নম্বর নয়।');
    } else {
        setErrornumber('');
      // Proceed with form submission or other actions
    } }

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.size > 1024 * 1024) { // 1 MB = 1024 * 1024 bytes
      setErrorMessage('আপনার ছবির সাইজ ১এমবির বেশি হওয়া যাবে না');
    } else {
      setErrorMessage('');
    }
    
    };

    return (
        <div className="bg-gray-500 py-4 px-4 lg:px-10  lg:mb-10 lg:py-10 rounded-md mt-10 lg:mx-20 mx-4">
            <form onSubmit={handleSubmit} className="lg:w-1/2  mx-auto">
                <div className="my-2">
                <label className="font-bold" htmlFor="name">আপনার নাম লিখুন</label>
                <input required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="text" name="name" placeholder="এখানে আপনার নাম লিখুন" />
                 </div>
                 <div className="my-2">
                    
        <label className="font-bold" htmlFor="number">
          চলমানকৃত মোবাইল নাম্বারটি লিখুন
        </label>
             <input
               required
               className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block"
               type="tel" // Use type="tel" for phone number input
               name="number"
               value={phoneNumber}
               onChange={handleInputChange}
               placeholder="এখানে আপনার মোবাইল নাম্বার লিখুন"
             />
      </div>
      {errornumber && <p className="text-yellow-500">{errornumber}</p>}
               <div className="my-2">
               <label className="font-bold " htmlFor="email">আপনার একটি ইমেইল দিন, আপনার নাম ভুলে গেলে ইমেইল দিয়ে লগইন করতে পারবেন</label>
                <input className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="email" name="email" placeholder="এখানে আপনার ইমেইল লিখুন" />
               </div>
               <div className="my-2">
                <label className="font-bold" htmlFor="year">আপনার বয়স লিখুন</label>
                <input required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="number" name="year" placeholder="এখানে আপনার বয়স লিখুন" />
                 </div>
                 <div className="my-2">
                <label className="font-bold" htmlFor="address">আপনার ঠিকানা যদি গ্রামে থাকেন তাহলে গ্রামের নাম দিতে হবে।</label>
                <input required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block " type="text" name="address" placeholder="এখানে গ্রামের নাম-উপজেলা-জেলা লিখুন" />
                 </div>
                <div className="my-2">
                <label className="font-bold" htmlFor="gender">লিংঙ্গ (পুরুষ / নারী)</label>              
                <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="gender" name="gender">
                <option value="পুরুষ">পুরুষ</option>
                <option value="নারী">নারী</option>
                <option value="অন্য কিছু">অন্য কিছু</option>
                </select>
                </div>
                <div className="my-2">  

                <label className="font-bold" htmlFor="gender">আপনার যানবাহন / গাড়ির নাম</label>              
                <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="gender" name="gender">
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
                <label className="font-bold" htmlFor="drivingday">আপনি কত বছর ধরে গাড়ি চালান ?</label>              
                <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="drivingday" name="drivingday">
                    <option value="0.5">১ বছরেরও কম</option>
                    <option value="1">১ বছর </option>      
                    <option value="2">২ বছর </option>
                    <option value="3">৩ বছর </option>
                    <option value="4">৪ বছর </option>
                    <option value="5">৫ বছর </option>
                    <option value="Upto 5 "></option>
                </select>
                </div>
                <div className="my-2">
                <label className="font-bold" htmlFor="earnings">বর্তমানে আপনার মাসিক আয় কত ? </label>              
                <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="earnings" name="earnings">
                <option value="under 5000">৫০০০ এর চেয়েও কম</option>
                <option value="5000">৫০০০ টাকা</option>
                <option value="8000">৮০০০ টাকা</option>
                <option value="10000">১০০০০ টাকা </option>     
                <option value="12000">১২০০০ টাকা </option>
                <option value="15000">১৫০০০ টাকা</option>
                <option value="Upto 15000">আরও বেশি</option>
                </select>
                </div>
                <div className="my-2">
                <label className="font-bold" htmlFor="exprience">আপনার গাড়ি চালানোর অভিজ্ঞতা</label>              
                <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="exprience" name="exprience">   
                    <option value="মোটামুটি">মোটামুটি</option>
                    <option value="ভালো">ভালো</option>
                    <option value="অনেক বেশি ভালো">অনেক বেশি ভালো</option>
                </select>
                </div>
                <div className="my-2">
                <label className="font-bold" htmlFor="carowner">আপনার গাড়ির মালিকানা কে ?</label>              
                <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="carowner" name="carowner"> 



                <option value="আমি নিজে">আমি নিজে</option>
                <option value="আমি ভাড়া চালাই">আমি ভাড়া চালাই</option>
                <option value="আমার বন্ধুর">আমার বন্ধুর</option>
                <option value="আমার ভাই/বাবা/কাকা">আমার ভাইয়ের/বাবা/কাকা</option>
                </select>
                </div>
                <div className="my-2">
                <label className="font-bold" htmlFor="licence">গাড়ির লাইসেন্স সম্পর্কে (আছে / নেই)</label>              
                <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="licence" name="licence">
                <option value="আছে">আছে</option>
                <option value="নেই">নেই</option>
                </select>
                </div>
                
                <div className="my-2">
                <label className="font-bold" htmlFor="photo">
                  আপনার একটি ভালো ও ক্লিয়ার ছবি দিন । <span className="text-yellow-400">
                  ছবির সাইজ ১এমবির বেশি হওয়া যাবে না ।
                  </span>
                </label>
                <input
                  className="bg-gray-700 w-11/12 rounded-md text-purple-500 focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block"
                  type="file"
                  name="photo"
                  onChange={handleFileChange}
                />
                {errorMessage && <p className="text-yellow-400">{errorMessage}</p>}
              </div>
              <div className="my-2">
                <label className="font-bold lg:relative" htmlFor="password">একটি শক্তিশালী পাসওয়ার্ড লিখুন। তা মনে রাখতে কোথাও লিখে রাখুন</label>
                <input required className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block "
                 type={show ? "text" : "password"}
                  name="password" placeholder="এখানে পাসওয়ার্ড লিখুন" />
                   <span onClick={()=>setShow(!show)} className='ml-[240px] absolute -mt-8 text-purple-500 text-xl lg:ml-[300px] cursor-pointer '>{ show ?  <FaEyeSlash/> : <FaEye /> }</span>
                  
                 </div>
                 <div className="flex gap-2">
                 <input type="checkbox" defaultChecked className="checkbox border-purple-800 checked:border-lime-800 [--chkbg:theme(colors.lime.600)] p-2 [--chkfg:white]" />
                <p className="text-white font-bold">
                আমাদের <Link className="text-lime-500 italic underline mx-1" to={'/terms&condition'}>নীতিমালা</Link> মনে চুলন।
                </p>
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

export default Driver;