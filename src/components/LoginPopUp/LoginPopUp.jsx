import React, { useState } from "react";
import "./LoginPopUp.css";
import assets from "../../assets/assets";
import { useAuth } from "../../context/AuthContext";

const LoginPopUp = ({ setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Log In");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    setShowLogin(false);
  };

  return (
    <div className="loginpopup">
      <form className="login-container" onSubmit={handleSubmit}>
        <div className="title">
          <h2>{currentState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} />
        </div>

        <div className="login-input">
          {currentState === "Sign Up" && (
            <input type="text" placeholder="Your name" required />
          )}
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button type="submit">
          {currentState === "Sign Up" ? "Create Account" : "Log In"}
        </button>

        {currentState === "Log In" ? (
          <p>
            Create a new account?
            <span onClick={() => setCurrentState("Sign Up")}> Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?
            <span onClick={() => setCurrentState("Log In")}> Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopUp;
