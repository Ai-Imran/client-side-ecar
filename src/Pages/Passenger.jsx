import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


const Passenger = () => {

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
    
      // Get form data
      const name = event.target.name.value;
      const phoneNumber = event.target.number.value;
      const email = event.target.email.value;
      const age = event.target.year.value;
      const gender = event.target.gender.value;
      const password = event.target.password.value;
      const photoFile = event.target.photo.files[0]?.name;
  
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
                <label className="font-bold" htmlFor="gender">লিংঙ্গ (পুরুষ / নারী)</label>              
                <select className="bg-gray-700  rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-10 py-2 block " id="gender" name="gender">
                <option value="পুরুষ">পুরুষ</option>
                <option value="নারী">নারী</option>
                <option value="অন্য কিছু">অন্য কিছু</option>
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

export default Passenger;