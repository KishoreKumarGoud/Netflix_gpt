/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import {netflix_log} from "../utils/constatnts"
import { toggleview } from "../utils/gptslice";

const Header=()=> {
  const mode=useSelector((store)=>store.gpt.showsearch);
  // console.log("toggle mode",mode);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.user);
  function handleSignout(){
    signOut(auth)
    .then(()=>{
      navigate("/");
    })
    .catch(()=>{
      //error 
    })
  }
  useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in
    const {uid,email,displayName,photoURL } = user;
    dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL }));
    navigate("/browse")
    // ...
  } else {
    // User is signed out
    dispatch(removeUser());
    navigate("/");
    
  }
});
return ()=> unsubscribe();
  },[])
  function handlesearch(){
      dispatch(toggleview());
  }

  
return (
 <div className="absolute px-2  bg-gradient-to-b from-black z-900 w-full flex justify-between">
<img src={netflix_log} alt="logo" className="w-36"/>
{user && <div className="flex justify-center items-center gap-8 ">
  <button className="py-1 px-2 mx-1 my-1.5 cursor-pointer font-semibold rounded-md bg-white text-black" onClick={handlesearch}>{!mode ? "🔍GPT Search" : "Home Page"}</button>
  <img src={user?.photoURL} alt="Image" className="rounded-full object-cover w-10 h-10"/> 
  <button onClick={handleSignout} className="cursor-pointer border border-none p-1.5 rounded-md bg-red-600 text-white font-xs">Sign Out</button>
</div>}
</div>
  )
}

export default Header;
