import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../../../assets/images/sports6.jpg";
import { FaGoogle, FaApple } from "react-icons/fa";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useRegisterUserMutation } from "../../../redux/api/authApi";
import { useDispatch } from "react-redux";
import { Input, Spinner } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useRegisterOrganizerMutation } from "../../../redux/api/organizerAuthApi";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [registerOrganizer, { isLoading, isError, error, isSuccess }] =
    useRegisterOrganizerMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
    setPhoneNumberError("");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async () => {
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError('Enter a valid email !');
      isValid = false;
    }

    if (!validatePhoneNumber(phoneNumber)) {
      setPhoneNumberError('Enter a valid phone number !');
      isValid = false;
    }

    // if (!validatePassword(password)) {
    //   setPasswordError(
    //     'Password should contain at least 8 characters having an uppercase and lowercase letter with one spacial character !'
    //   );
    //   isValid = false;

    // }

    if (isValid) {
      // Perform sign up logic here
      try {
        const userData = await registerOrganizer({
          name: fullName,
          email_id: email,
          password,
          mobile_number: phoneNumber,
        }).unwrap();
        console.log(userData);
        toast.success(userData?.message)
        navigate('/organizer/login')
      } catch (error) {
        console.log("error", error?.data?.detail)
        toast.error(error?.data?.detail)
      }
      
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneNumberPattern = /^\d{10}$/;
    return phoneNumberPattern.test(phoneNumber);
  };

  const validatePassword = (password) => {
    const passwordPattern =
      /^(?=.?[A-Z])(?=.?[a-z])(?=.?[0-9])(?=.?[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return passwordPattern.test(password);
  };

  const handleGoogleSignIn = () => {
    window.open(
      "https://accounts.google.com/",
      "_blank",
      "width=500,height=600"
    );
  };

  const handleAppleSignIn = () => {
    window.open("https://appleid.apple.com/", "_blank", "width=500,height=600");
  };

  return (
    <section
      className="text-gray-600 font-poppins"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-start justify-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
          {/* <img src={game} alt="Image 1" className="w-full" /> */}
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-white bg-opacity-30 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 hover:scale-[1.05]">
          <h2 className="text-gray-900 text-3xl text-center font-bold title-font mb-5">
            Create an Account
          </h2>
          <div className="flex justify-center mb-4">
            <button
              onClick={handleGoogleSignIn}
              className="mr-32 hover:text-orange-500 hover:shadow-lg"
            >
              <FaGoogle size={24} />
            </button>
            <Link
              onClick={handleAppleSignIn}
              className="hover:text-orange-500 hover:shadow-lg"
            >
              <FaApple size={24} />
            </Link>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="leading-7 text-sm text-gray-600"
            >
              Full Name
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              className="w-full bg-white rounded-full border border-indigo-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={fullName}
              onChange={handleFullNameChange}
              placeholder="Enter your full name"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full bg-white rounded-full border border-indigo-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                emailError && "border-orange-500"
              }`}
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
            {emailError && (
              <p className="text-xs text-orange-500 mt-1">{emailError}</p>
            )}
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="phone-number"
              className="leading-7 text-sm text-gray-600"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone-number"
              name="phone-number"
              className={`w-full bg-white rounded-full border border-indigo-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                phoneNumberError && "border-orange-500"
              }`}
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="Enter your phone number"
            />
            {phoneNumberError && (
              <p className="text-xs text-orange-500 mt-1">{phoneNumberError}</p>
            )}
          </div>
          <div className="relative mb-4">
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
                className={`w-full bg-white rounded-full border border-indigo-500 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ${
                  passwordError && "border-orange-500"
                }`}
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
              />
              <button
                className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent border-none focus:outline-none"
                onClick={handleTogglePasswordVisibility}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} className="text-gray-500" />
                ) : (
                  <AiOutlineEye size={20} className="text-gray-500" />
                )}
              </button>
            </div>
            {passwordError && (
              <p className="text-xs text-orange-500 mt-1">{passwordError}</p>
            )}
          </div>
          <button
            className="flex items-center justify-center text-white bg-white bg-opacity-40 hover:bg-orange-300  border-0 py-2 px-8 focus:outline-none rounded text-lg"
            onClick={handleSignUp}
          >
            {isLoading ? <Spinner /> : "Sign up"}
          </button>

          <p className="text-gray-600 text-normal text-2xl text-center mt-8">
            Been here before?{" "}
            <Link
              to="/organizer/login"
              style={{ fontSize: "2rem", color: "orange" }}
              className="underline font-normal text-3xl flex items-center justify-center "
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Register;