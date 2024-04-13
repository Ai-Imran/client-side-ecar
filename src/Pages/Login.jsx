import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    const [show, setShow] = useState(false);
    const [showNameInput, setShowNameInput] = useState(true);
    const [showEmailInput, setShowEmailInput] = useState(false);
    const [showPhoneNumberInput, setShowPhoneNumberInput] = useState(false);
    const [showPasswordField, setShowPasswordField] = useState(true); // State to control password field visibility
    const [phoneNumber, setPhoneNumber] = useState('');
    // const [errorNumber, setErrorNumber] = useState('');

    const handleNameClick = () => {
        setShowNameInput(false);
        setShowEmailInput(true);
        setShowPasswordField(true); // Ensure password field is visible when switching from phone number to email
        setShowPhoneNumberInput(false); // Hide phone number field when switching from phone number to email
    };

    const handleEmailClick = () => {
        setShowNameInput(true);
        setShowEmailInput(false);
        setShowPasswordField(true); // Ensure password field is visible when switching from phone number to email
        setShowPhoneNumberInput(false); // Hide phone number field when switching from email to phone number
    };

    const handlePhoneClick = () => {
        setShowNameInput(false);
        setShowEmailInput(false);
        setShowPhoneNumberInput(true);
        setShowPasswordField(false); // Hide password field when clicking on phone number forget
    };

    const handleBackToPasswordClick = () => {
        setShowNameInput(true);
        setShowEmailInput(false);
        setShowPasswordField(true); // Show password field when clicking on back from phone number forget
        setShowPhoneNumberInput(false); // Hide phone number field when clicking on back from phone number forget
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        
        const name = showNameInput ? event.target.name.value : '';
        const password = showPasswordField ? event.target.password.value : '';
        const email = showEmailInput ? event.target.email.value : '';

        // Conditionally access phone number field value
        const phoneNumber = showPhoneNumberInput ? event.target.number.value : '';


    
        // // Log data to console
        // console.log('Name:', name);
        // console.log('Phone Number:', phoneNumber);
        // console.log('Email:', email);
        // console.log('Password:', password);


        // const bdPhoneNumberPattern = /^(?:\+?88|0088)?01[3-9]\d{8}$/;
        // if (!bdPhoneNumberPattern.test(phoneNumber)) {
        //     // setErrorNumber('এটি একটি বাংলাদেশী ফোন নম্বর নয়।');
        // } else {
        //     setErrorNumber('');
        //     // Proceed with form submission or other actions
        // }
    };

    return (
        <div className="text-white min-h-screen">
            <div className="bg-gray-500 py-4 px-4 lg:px-10 lg:mb-10 lg:py-10 rounded-md mt-10 lg:mx-20 mx-4">
                <p className="text-center my-10 font-bold text-xl">
                    আপনার যদি কোনো একাউন্ট না থাকে তাহলে এখানে ক্লিক করে{' '}
                    <Link to={'/signup'}>
                        <span className="text-lime-500 underline italic px-1"> একাউন্ট খুলুন </span>{' '}
                    </Link>
                </p>
                <form onSubmit={handleSubmit} className="lg:w-1/2 mx-auto">
                    <div className="my-2">
                        {showNameInput && (
                            <>
                                <label htmlFor="name" className="font-bold">
                                    আপনি যে নামে একাউন্ট খুলেছিলেন ঐ নামটি লিখুন
                                </label>
                                <input
                                    
                                    className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block"
                                    type="text"
                                    name="name"
                                    placeholder="এখানে আপনার নাম লিখুন"
                                />
                                <span
                                    className="text-lime-500 underline cursor-pointer font-bold px-1"
                                    onClick={handleNameClick}
                                >
                                    আমার নাম ভুলে গেছি
                                </span>
                            </>
                        )}
                        {showEmailInput && (
                            <>
                                <label htmlFor="email" className="font-bold">
                                    আপনি যে ইমেইল একাউন্ট খুলেছিলেন ঐ ইমেলটি লিখুন
                                </label>
                                <input
                                    
                                    className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block"
                                    type="email"
                                    name="email"
                                    placeholder="এখানে আপনার ইমেইল লিখুন"
                                />
                                <span
                                    className="text-lime-500 underline cursor-pointer font-bold px-1"
                                    onClick={handleEmailClick}
                                >
                                    আমার ইমেইল ভুলে গেছি
                                </span>
                            </>
                        )}
                        {showPhoneNumberInput && (
                            <>
                                <label className="font-bold" htmlFor="number">
                                আপনি যে মোবাইল নাম্বারটি দিয়ে একাউন্টটি খুলেছিলেন ঐ নাম্বারটি লিখুন  
                                </label>
                                <input
                                    
                                    className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block"
                                    type="tel"
                                    name="number"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    placeholder="এখানে আপনার মোবাইল নাম্বার লিখুন"
                                />
                                <span className="text-lime-500 underline cursor-pointer font-bold px-1" onClick={handleBackToPasswordClick}>
                                    মোবাইল নাম্বার ভুলে গেছি
                                </span>
                            </>
                        )}
                        {/* {errorNumber && <p className="text-yellow-500">{errorNumber}</p>} */}
                    </div>
                    <div className="my-2">
                        {showPasswordField && (
                            <>
                                <label className="font-bold lg:relative" htmlFor="password">
                                    আপনি যে পাসওয়ার্ড দিয়ে একাউন্টটি খুলেছিলেন ঐ পাসওয়ার্ডটি লিখুন
                                </label>
                                <input
                                    
                                    className="bg-gray-700 w-11/12 rounded-md text-white focus:border-lime-500 focus:border focus:shadow-lg outline-none px-3 py-2 block"
                                    type={show ? 'text' : 'password'}
                                    name="password"
                                    placeholder="এখানে পাসওয়ার্ড লিখুন"
                                />
                                <span
                                    onClick={() => setShow(!show)}
                                    className="ml-[240px] absolute -mt-8 text-purple-500 text-xl lg:ml-[480px] cursor-pointer"
                                >
                                    {show ? <FaEyeSlash /> : <FaEye />}
                                </span>
                                <span className="text-lime-500 underline cursor-pointer font-bold px-1" onClick={handlePhoneClick}>
                                    পাসওয়ার্ড ভুলে গেছি
                                </span>
                            </>
                        )}
                        <div className="mx-auto text-center">
                            <div className="bg-gradient-to-r from-purple-600 via-red-600 mx-auto text-center to-yellow-300 mt-5 lg:mr-12 p-2 rounded-md font-semibold cursor-pointer">
                                <input
                                    className="lg:w-[310px] text-center mx-auto font-bold text-white cursor-pointer"
                                    type="submit"
                                    value="লগইন করুন"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
