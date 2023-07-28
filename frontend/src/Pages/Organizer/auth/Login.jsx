import React, { useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";
import backgroundImage from "../../../assets/images/sports6.jpg";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import Cookies from 'universal-cookie'
import jwt from 'jwt-decode'
import { useLoginOrganizerMutation } from "../../../redux/api/organizerAuthApi";

const Login = () => {
  const cookie = new Cookies();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registerOrganizer, { isLoading, isError, error, isSuccess }] =
  useLoginOrganizerMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = async () => {
    try {
      const orgData = await registerOrganizer({ email_id: email, password }).unwrap();
      console.log(orgData);
      const decoded = jwt(orgData?.access_token)
      console.log("decoded", decoded)
      cookie.set("jwt_auth_token", orgData.access_token, {
        expires: new Date(decoded.exp*1000)
      })
      toast.success(orgData?.message);
      navigate("/organizer/me");
    } catch (error) {
      // console.log("error", error?.data?.detail);
      toast.error(error?.data?.detail);
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return passwordPattern.test(password);
  };

  const handleFormSubmit = (event) => {
    console.log("clicked")
    event.preventDefault();
    let isValid = true;

    // if (!validateEmail(email)) {
    //   setEmailError("Enter a valid email!");
    //   isValid = false;
    // }

    // if (!validatePassword(password)) {
    //   setPasswordError(
    //     "Password should contain at least 8 characters having an uppercase and lowercase letter with one spacial character !"
    //   );
    //   isValid = false;
    // }

    if (isValid) {
      handleSignIn();
    }
  };

  return (
    <section
      className="text-gray-600 font-poppins min-h-screen min-w-screen p-5"

      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}

    >
    <p className=" text-black font-bold text-3xl absolute top-2">G-Sport</p>

      <div className="py-5  flex flex-col md:flex-row items-center justify-center md:space-x-5">


        <div className="mb-5 md:mb-0 md:block lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          <div className="hidden md:block border-t-4 border-gray-400 w-full mb-4"></div>
          <h1 className="hidden md:block font-bold text-sm lg:text-4xl  text-blue-gray-800">
            A sports Enthusiast is here, Hi !
          </h1>
          <p className="hidden md:block leading-relaxed mt-4 text-sm lg:text-4xl text-blue-gray-800">
            Welcome to a platform that brings transparency in the world of
            sports and tournaments
          </p>
          <div className="hidden md:block  mt-4 border-t-4 border-gray-400 w-full"></div>
        </div>



        <div className="lg:w-2/6 md:w-1/2 bg-white bg-opacity-100 rounded-lg p-8 flex flex-col justify-center items-center w-full xl:my-10 shadow-xl">
          <h2 className="text-gray-900 text-xl sm:text-2xl lg:text-3xl font-bold title-font mb-2 text-center">
            Sign In
          </h2>
          <div className="relative mb-4 w-full">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded-full border border-indigo-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
            {emailError && (
              <p className="text-xs text-orange-500 mt-1">{emailError}</p>
            )}
          </div>
          <div className="relative mb-4 w-full">
            <label
              htmlFor="password"
              className="leading-7 text-sm text-gray-600"
            >
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="w-full bg-white rounded-full border border-indigo-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 12a5 5 0 11-10 0 5 5 0 0110 0z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-5 h-5 text-gray-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 12a5 5 0 11-10 0 5 5 0 0110 0z"
                    />
                  </svg>
                )}
              </button>
            </div>
            {passwordError && (
              <p className="text-xs text-orange-500 mt-1">{passwordError}</p>
            )}
          </div>
          <div className="relative mb-4 flex items-start justify-start w-full">
            <label htmlFor="remember-me" className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="mr-2"
                checked={rememberMe}
                onChange={handleRememberMe}
              />
              <span className="text-sm text-gray-600">Remember Me</span>
            </label>
          </div>
          <div className="text-center w-full">
            <button onClick={handleFormSubmit} className="flex items-center justify-center w-full text-white bg-orange-400 hover:bg-orange-500  border-0 py-2 px-8 focus:outline-none rounded-3xl text-lg">
              {isLoading ? <Spinner/> : "Log in"}
            </button>
          </div>
          <div className="mt-3 text-center">
            <p className="text-sm text-gray-500">
              or scan the code from application
            </p>
            <div className="mt-3 flex flex-col items-center">
              <QRCode value="Your QR code data" size={128} />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row text-sm justify-center items-center space-x-2 mt-3">
          
            <p className="text-gray-600 text-normal text-center">
              Don't have an account?{" "}
            </p>
            <Link
              to="/user/register"
              className="underline font-normal flex items-center justify-center text-blue-600"
            >
              Sign up
            </Link>
          
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
