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
      <img src={netflix_log} alt="logo" className="w-28 md:w-36" />

      {user && (
        <div className="flex justify-center items-center gap-3 md:gap-6">
          {/* GPT Search / Home Toggle Button */}
          <button
            onClick={handlesearch}
            className=" cursor-pointer p-2 rounded-full bg-white/20 hover:bg-white/30 transition text-white flex items-center justify-center"
            title={!mode ? "GPT Search" : "Home"}
          >
            {!mode ? (
              // Search Icon
              <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-7 cursor-pointer"
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
                    <span className="hidden sm:block">Ask AI</span>

              </>
            ) : (
              // Home Icon
              <>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-7 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l9-9 9 9M4 10v10a1 1 0 001 1h5m4 0h5a1 1 0 001-1V10"
                />
              </svg>
                    <span className="hidden sm:block">Home</span>
                    </>

            )}
          </button>

          {/* User Image */}
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.5BXv93APzyY0aR-r8QfWWwHaHa?pid=Api&P=0&h=180"
            alt="User"
            className="rounded-full object-cover w-9 h-9 md:w-10 md:h-10"
          />

          {/* Sign Out Button */}
          <button
            onClick={handleSignout}
            className="cursor-pointer px-3 py-1.5 rounded-md bg-red-600 hover:bg-red-700 transition text-white text-sm font-medium"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
