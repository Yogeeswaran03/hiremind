import React, { useState } from 'react';
import signin from '../assets/signin.png';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import google from '../assets/google_symbol.svg.png';
import apple from '../assets/Logo.svg.png';
import facebook from '../assets/Symbol.svg.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Signin = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleRegisterClick = () => {
    navigate('/'); // Navigate to the Signup page
  };

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center p-4 md:p-16 md:px-20 bg-white">
      {/* Parent container with flex and equal height */}
      <div className="flex flex-col-reverse md:flex-row w-full h-full md:w-3/4 max-w-screen-xl">
        
        {/* Left Section - Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 rounded-xl md:border bg-white border-gray-300">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Welcome back!</h2>
          <div className="text-center mb-6 md:mb-8 text-xs md:text-sm">
            <p className="text-gray-600">
              We're glad to see you again. Log in to pick up where you left off, access your personalized content, and explore what's new.
            </p>
          </div>

          {/* Input Fields */}
          <input
            type="text"
            placeholder="Username"
            className="w-full border border-gray-300 rounded-3xl p-2 md:p-3 mb-3 md:mb-4 text-sm md:text-base"
          />
          <div className="relative w-full mb-3 md:mb-4">
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Password"
              className="w-full border border-gray-300 rounded-3xl p-2 md:p-3 text-sm md:text-base"
            />
            <div
              className="absolute right-3 top-3 md:top-4 cursor-pointer"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? (
                <FaEyeSlash className="text-gray-500" />
              ) : (
                <FaEye className="text-gray-500" />
              )}
            </div>
          </div>

          {/* Forget password link */}
          <div className="w-full text-right mb-4 md:mb-6">
            <a href="#" className="text-gray-500 text-xs md:text-sm">Forget password?</a>
          </div>

          {/* Login Button */}
          <div className="flex justify-center gap-4 mb-6 md:mb-8 w-full">
            <button className="bg-black text-white border px-20 md:px-32 border-gray-300 p-2 md:p-3 rounded-3xl w-full text-sm md:text-base">
              Login
            </button>
          </div>

          {/* Horizontal Line and "or continue with" */}
          <div className="flex items-center w-full mb-3 md:mb-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-2 md:px-3 text-gray-500 text-xs md:text-sm">or continue with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-3 md:gap-4">
            <button className="p-2 md:p-3 bg-black rounded-full">
              <img src={google} alt="Google" className="w-4 md:w-6 h-4 md:h-6" />
            </button>
            <button className="p-2 md:p-3 bg-black rounded-full">
              <img src={apple} alt="Apple" className="w-4 md:w-6 h-4 md:h-6" />
            </button>
            <button className="p-2 md:p-3 bg-black rounded-full">
              <img src={facebook} alt="Facebook" className="w-4 md:w-6 h-4 md:h-6" />
            </button>
          </div>

          {/* Not a member */}
          <div className="mt-4 md:mt-6">
            <p className="text-center text-xs md:text-sm">
              <span className="text-gray-500">Not a member? </span>
              <a
                href="#"
                onClick={handleRegisterClick} // Trigger navigation on click
                className="text-customgreen font-semibold"
              >
                Register now!
              </a>
            </p>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="w-full md:bg-customgreen md:w-1/2 flex justify-center items-center flex-col p-6 md:p-12 rounded-xl">
          <img src={signin} alt="signin" className="w-1/2 md:w-2/3 mb-4 md:mb-6 rounded-lg" />
          <p className="hidden md:block text-black text-sm md:text-lg text-center">
            We’re excited to have you here again! Dive right back in to discover what’s new and pick up where you left off.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
