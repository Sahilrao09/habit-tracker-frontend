import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useNavigate } from "react-router-dom";

const AuthPage = ({ onAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (user) => {
    console.log("Authenticated user:", user);
    // Navigate or set user context here
    onAuth(user);
    navigate("/habits");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
      {isLogin ? (
        <>
          <LoginForm onLogin={handleAuth} />
          <p className="mt-4 text-sm">
            Don't have an account?{" "}
            <button
              className="text-blue-500 hover:underline"
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignupForm onSignup={handleAuth} />
          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <button
              className="text-blue-500 hover:underline"
              onClick={() => setIsLogin(true)}
            >
              Log In
            </button>
          </p>
        </>
      )}
    </div>
  );
};

export default AuthPage;
