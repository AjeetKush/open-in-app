import React from "react";
import { ReactComponent as Ellipse } from "../assets/Ellipse.svg";
import { ReactComponent as Vector } from "../assets/Vector.svg";
import { ReactComponent as Git } from "../assets/Git.svg";
import { ReactComponent as Twitter } from "../assets/Twitter.svg";
import { ReactComponent as Linkedin } from "../assets/linkedin.svg";
import { ReactComponent as Discord } from "../assets/Discord.svg";
import { ReactComponent as Google } from "../assets/Google.svg";
import { ReactComponent as Apple } from "../assets/Apple.svg";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="container">
      <div className="left-side">
        <div className="logo">
          {<Ellipse />}
          {<Vector />}
        </div>
        <div className="base-text">
          <h1>BASE</h1>
        </div>
        <div className="social-links">
          <div className="icon">{<Git />}</div>
          <div className="icon">{<Twitter />}</div>
          <div className="icon">{<Linkedin />}</div>
          <div className="icon">{<Discord />}</div>
        </div>
      </div>
      <div className="right-side">
        <div className="main-content">
          <h1>Sign In</h1>
          <p>Sign in to your account</p>
          <div className="auth-buttons">
            <button className="google-auth">
              <Google /> Sign in with Google
            </button>
            <button className="apple-auth">
              <Apple /> Sign in with Apple
            </button>
          </div>
        </div>
        <div className="login-form">
          <div className="inputs">
            <label htmlFor="email" className="label">
              Email address
            </label>
            <input type="email" id="email" className="label-input" />
          </div>
          <div className="inputs">
            <label htmlFor="password" className="label">
              Password
            </label>
            <input type="password" id="password" className="label-input" />
          </div>
          <div className="forgot-password">Forgot password?</div>
          <Link to= "/upload">
            <button className="sign-in-button">Sign In</button>
          </Link>
        </div>
        <div>
          <p className="register-prompt">
            Don’t have an account?{" "}
            <span className="register-link">Register here</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
