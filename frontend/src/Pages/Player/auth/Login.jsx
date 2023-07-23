// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import { useDispatch } from "react-redux";
// import { selectCurrentToken, setUser } from "../../../redux/features/userSlice";
// import { useLoginUserMutation } from "../../../redux/api/authApi";
// import { Button, Input } from "@material-tailwind/react";
// import { useCookies } from 'react-cookie';

// const Login = () => {
//   const userRef = useRef();
//   const errRef = useRef();
//   const [user, setUserd] = useState("");
//   const [pwd, setPwd] = useState("");
//   const [errMsg, setErrMsg] = useState("");
//   const navigate = useNavigate();

//   const [loginUser, { isLoading, isError, error, isSuccess }] =
//   useLoginUserMutation();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     useRef?.current?.focus();
//   }, []);

//   useEffect(() => {
//     setErrMsg("");
//   }, [user, pwd]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const userData = await loginUser({ user, pwd }).unwrap() // unwrap allows us to use try catch
//       dispatch(setUser({ ...userData, user})); // saving the user name and getting access token
//       setUser("");
//       setPwd("");
//       navigate("/welcome");
//     } catch (error) {
//       if (!error?.status) {
//         setErrMsg("No server Response");
//       } else if (error?.status === 400) {
//         setErrMsg(error?.data?.detail);
//       } else if (error?.status === 401) {
//         setErrMsg(error?.data?.detail);
//       } else {
//         setErrMsg("Login faild");
//       }
//       errRef.current.focus();
//     }
//   };

//   const handleUserInput = (e) => setUserd(e.target.value);

//   const handlePwdInput = (e) => setPwd(e.target.value);

//   const content =  (
//     <section className="login">
//       <p
//         ref={errRef}
//         className={errMsg ? "errmsg" : "offscreen"}
//         aria-live="assertive"
//       >
//         {errMsg}
//       </p>

//       <h1>Player Login</h1>

//       <form onSubmit={handleSubmit}>
//         <label htmlFor="username">Username:</label>
//         <Input
//           type="text"
//           id="username"
//           ref={userRef}
//           value={user}
//           onChange={handleUserInput}
//           autoComplete="on"
//           required
//         />

//         <label htmlFor="password">Password:</label>
//         <Input
//           type="text"
//           id="password"
//           onChange={handlePwdInput}
//           value={pwd}
//           required
//         />
//         <Button type="submit">{isLoading ? "...loading" : "sign up"}</Button>
//       </form>
//     </section>
//   );

//   return content;
// };

// export default Login;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import QRCode from "qrcode.react";
import { useLoginUserMutation } from "../../../redux/api/authApi";
import backgroundImage from "../../../assets/images/sports6.jpg";
import { useNavigate } from "react-router-dom";
import { Spinner } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import Cookies from 'universal-cookie'
import jwt from 'jwt-decode'

function Login() {
  const cookie = new Cookies()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginUser, { isLoading, isError, error, isSuccess }] =
    useLoginUserMutation();
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
      const userData = await loginUser({ email_id: email, password }).unwrap();
      const decoded = jwt(userData.access_token)
      cookie.set("jwt_auth_token", userData.access_token, {
        expires: new Date(decoded.exp * 1000)
      })
      // console.log(isSuccess)
      if(isSuccess){
        toast.success(userData?.message);
        navigate("/player/me");
      }
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
    event.preventDefault();
    let isValid = true;

    if (!validateEmail(email)) {
      setEmailError("Enter a valid email!");
      isValid = false;
    }

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
      className="text-gray-600 body-font"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        minHeight: "100vh",
      }}
    >
      <div className="container px-5 py-24 mx-auto flex flex-wrap items-start justify-center">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 mt-32">
          <div className="mt-4 border-t-4 border-gray-400 w-full mb-4"></div>
          <h1 className="title-font font-bold text-5xl text-gray-400">
            A sports Enthusiast is here, Hi !
          </h1>
          <p className="leading-relaxed mt-4  text-gray-400">
            Welcome to a platform that brings transparency in the world of
            sports and tournaments
          </p>
          <div className="mt-4 border-t-4 border-gray-400 w-full"></div>
        </div>
        <div className="lg:w-2/6 md:w-1/2 bg-white bg-opacity-30 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 hover:scale-[1.05]">
          <h2 className="text-gray-900 text-3xl font-bold title-font mb-5 text-center">
            Sign In
          </h2>
          <div className="relative mb-4">
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
          <div className="relative mb-4">
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
          <div className="text-center mb-4">
            <button onClick={handleFormSubmit} className="flex items-center justify-center w-full text-white bg-white bg-opacity-40 hover:bg-orange-300  border-0 py-2 px-8 focus:outline-none rounded text-lg">
              {isLoading ? <Spinner/> : "Log in"}
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500 mt-2">
              or scan the code from application
            </p>
            <div className="mt-4 flex flex-col items-center">
              <QRCode value="Your QR code data" size={128} />
            </div>
          </div>
          <p className="text-gray-600 text-normal text-2xl text-center mt-8">
            Don't have an account?{" "}
            <Link
              to="/signin"
              style={{ fontSize: "2rem", color: "orange" }}
              className="underline font-normal text-3xl flex items-center justify-center"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Login;
