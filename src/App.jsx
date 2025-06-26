import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import AuthPage from "./components/AuthPage";
import HabitPage from "./components/HabitPage";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      setUser({ id: userId });
    }
  }, []);

  const handleAuth = (userData) => {
    setUser(userData);
    localStorage.setItem("userId", userData.id);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthPage onAuth={handleAuth} />} />
        <Route
          path="/habits"
          element={user ? <HabitPage /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
