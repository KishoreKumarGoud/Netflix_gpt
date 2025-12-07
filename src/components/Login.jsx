/* eslint-disable no-unused-vars */
import { useEffect, useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { login_bg } from "../utils/constatnts";


const Login = () => {
  const [isSignIn,setformMode]=useState(true);
  const [email,setemail]=useState("");
  const [password,setpassword]=useState("");
  const [name,setname]=useState("");
  const mailref=useRef(null);
  const nameref=useRef(null);
  const [error,seterror]=useState(null);
  const dispatch=useDispatch();
  const toggleForm=()=>{
    setformMode(!isSignIn);
  }
  useEffect(()=>{
    mailref?.current.focus();
  },[])
  function validatedetails(e){
    e.preventDefault();
     const err=validateForm({email,password,name,isSignIn})
    seterror(err);
    if(error) return;


    //sign or sign up
     if(!isSignIn){
      //signup
     createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
  displayName: name, photoURL: "https://media.licdn.com/dms/image/v2/D5635AQGl7G5BGiGC2A/profile-framedphoto-shrink_100_100/B56Zpw_M8wJ8Ak-/0/1762832207962?e=1765026000&v=beta&t=WiQ1i9gDcZh_N6vEm6i644dHAtqvMHg2RFOs28NhBKs"
}).then(() => {
  // Profile updated!
     const {uid,email,displayName,photoURL } = auth.currentUser;
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL }));

}).catch((error) => {
  // An error occurred
  seterror(error.message)
});
   

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterror(errorCode + " " +errorMessage);
  });
    }
    else{
      //signin

      signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;

         
    // console.log("usert detials",user);
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterror(errorCode + " "+ errorMessage);
  });
    }
  }
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Header stays on top */}
      <Header />

      {/* Background image */}
      <img
        src={login_bg}
        alt="bg-image"
        className="w-screen h-screen object-cover absolute top-0 left-0 -z-10"
      />

      {/* Form centered */}
      <form className="
  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
  bg-black/65 py-10 px-6 sm:px-10 md:px-12
  rounded-xl shadow-xl
  flex flex-col gap-4 text-white
  w-[90%] sm:w-[70%] md:w-[50%] lg:w-[35%] xl:w-[28%]
">

                        <label className="text-2xl font-semibold">{isSignIn? "Sign In" :"Sign Up"}</label>
          {!isSignIn &&  <input
          type="text"
          placeholder="Name"
          value={name}
    onChange={(e) => setname(e.target.value)}
          ref={nameref}
className="p-3 text-[14px] sm:text-base bg-gray-900/70 rounded outline-none"
        />}              
        <input
          type="text"
          placeholder="Email Address"
           value={email}
    onChange={(e) => setemail(e.target.value)}
          ref={mailref}
className="p-3 text-[14px] sm:text-base bg-gray-900/70 rounded outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
              onChange={(e) => setpassword(e.target.value)}

className="p-3 text-[14px] sm:text-base bg-gray-900/70 rounded outline-none"
        />
        <button className="p-1 bg-red-600 rounded text-sm cursor-pointer" onClick={(e)=>validatedetails(e)}>
{isSignIn ? "Sign In" : "Sign Up"}        </button>
        <div className="flex text-gray-400 justify-between -mt-3">
           <span className="text-xs">Remember me</span>
        <span className="text-xs">Need help?</span>
        </div>
        <p className="text-red-500 font-medium">{error!=null ? error :"All right"} </p>
        <div className="text-sm my-8">
          <span className="text-gray-400 ">{isSignIn? "New to Netflix?" : "Already have an account?"}</span>
          {isSignIn ?  <span onClick={toggleForm} className="cursor-pointer">Sign up now</span>
:           <span onClick={toggleForm} >Sign In now</span>
}

          <p className="mt-2.5 text-gray-400">This page is protected by reCaptcha to<br></br> ensure your are not a bot. <a className="text-blue-500">Learn More </a></p>
        </div>
       
      </form>
      
    </div>
  );
};

export default Login;
