import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import signup from '../assets/bro.png';
import google from '../assets/google_symbol.svg.png';
import apple from '../assets/Logo.svg.png';
import facebook from '../assets/Symbol.svg.png';

const Signup = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    navigate('/signin'); // Navigate to SignIn page
  };

  return (
    <div className="flex flex-col md:flex-row h-screen items-center justify-center p-4 md:p-16 md:px-20 bg-white">
      {/* Parent container with flex and equal height */}
      <div className="flex flex-col md:flex-row w-full h-full md:w-3/4 max-w-screen-xl">
        
        {/* Left Section - Show only photo for mobile */}
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-12 md:bg-customgreen rounded-xl">
          <div className="flex flex-col items-center">
            <img src={signup} alt="signup" className="w-2/3 md:w-2/3 mb-4 md:mb-6 rounded-lg" />
            {/* Keep the <p> tag only for desktop view */}
            <p className="hidden md:block text-black text-base md:text-lg text-center">
              Unlock exclusive features, personalize your experience, and stay connected with everything you love.
            </p>
          </div>
        </div>

        {/* Right Section - All content in column for mobile */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12 bg-white rounded-xl md:border border-gray-300">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">Create Account</h2>
          <p className="text-gray-600 text-center text-sm md:text-base mb-6 md:mb-8">
            Join us and unlock a world of personalized experiences tailored just for you!
          </p>

          {/* Input Fields */}
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-3xl p-2 md:p-3 mb-3 md:mb-4 text-sm md:text-base"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-3xl p-2 md:p-3 mb-3 md:mb-4 text-sm md:text-base"
          />
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 mb-4 md:mb-6 w-full">
            <input
              type="password"
              placeholder="Password"
              className="w-full border border-gray-300 rounded-3xl p-2 md:p-3 text-sm md:text-base"
            />
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full border border-gray-300 rounded-3xl p-2 md:p-3 text-sm md:text-base"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8 w-full">
            <button className="bg-black text-white p-2 md:p-3 rounded-3xl w-full text-sm md:text-base">
              Register
            </button>
            <button
              onClick={handleSignInClick} // Navigate to SignIn page
              className="bg-white text-black border px-4 md:px-6 border-gray-300 p-2 md:p-3 rounded-3xl w-full text-sm md:text-base"
            >
              Sign In
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
        </div>
      </div>
    </div>
  );
};

export default Signup;
