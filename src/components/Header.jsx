/* eslint-disable no-unused-vars */
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useEffect } from "react";
import { netflix_log } from "../utils/constatnts";
import { toggleview } from "../utils/gptslice";

const Header = () => {
  const mode = useSelector((store) => store.gpt.showsearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        // handle error if needed
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid,
            email,
            displayName,
            photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handlesearch = () => {
    dispatch(toggleview());
  };

  return (
    <div className="fixed top-0 left-0 px-4 py-2 bg-gradient-to-b from-black to-transparent z-50 w-full flex justify-between items-center">
      <img src={netflix_log} alt="logo" className="w-28 md:w-36 cursor-pointer" onClick={handlesearch
      }/>

     {user && (
  <div className="flex items-center gap-2">
    
    {/* GPT Search Button */}
    <button
      onClick={handlesearch}
      className="cursor-pointer px-4 py-2 rounded-full bg-white/20 hover:bg-white/30 transition text-white flex items-center gap-2 whitespace-nowrap"
      title="Ask AI"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-4.35-4.35m2.35-5.65a8 8 0 11-16 0 8 8 0 0116 0z"
        />
      </svg>

      <span className="block">Ask AI</span>
    </button>

    {/* Sign Out Button */}
    <button
      onClick={handleSignout}
      className="cursor-pointer px-3 py-1.5 rounded-md bg-red-600 hover:bg-red-700 transition text-white text-sm font-medium whitespace-nowrap"
    >
      Sign Out
    </button>

  </div>
)}

    </div>
  );
};

export default Header;
