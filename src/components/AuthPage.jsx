import { useState } from "react";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { useNavigate } from "react-router-dom";

const AuthPage = ({ onAuth }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleAuth = (user) => {
    console.log("Authenticated user:", user);
    onAuth(user);
    navigate("/habits");
  };

  return (
    <div className="min-h-screen bg-[#151414] text-white flex flex-col items-center justify-center px-4">
      {isLogin ? (
        <>
          <LoginForm onLogin={handleAuth} />
          <p className="mt-4 text-sm text-white">
            Don&apos;t have an account?{" "}
            <button
              className="text-yellow-400 hover:underline font-medium"
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </p>
        </>
      ) : (
        <>
          <SignupForm onSignup={handleAuth} />
          <p className="mt-4 text-sm text-white">
            Already have an account?{" "}
            <button
              className="text-yellow-400 hover:underline font-medium"
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
