
export const validateForm = ({ email, password, name = null, isSignIn }) => {
  // Email regex
  const emailRegex =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Password regex (min 8 chars, 1 uppercase, 1 lowercase, 1 number)
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

  // 1️⃣ For Sign Up → validate name too
  if (!isSignIn && (!name || name.trim().length < 3)) {
    return "Name must be at least 3 characters.";
  }

  // 2️⃣ Email validation
  if (!email || !emailRegex.test(email.trim())) {
    return "Invalid email format.";
  }

  // 3️⃣ Password validation
  if (!password || !passwordRegex.test(password.trim())) {
    return "Password must be at least 8 characters with 1 uppercase, 1 lowercase, and 1 number.";
  }

  return null; // all good
};
