import React from "react";
import logo from "../../assets/foodixus-logo.svg";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function getHeaderClass(locationPath) {
  if (locationPath.includes("/login/signupProviders")) {
    return "show-signup";
  }
  return "";
}

function LoginHeader() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogoClick = () => {
    navigate("/");
  };

  // Login header page title and paragraph

  let pageTitle = "";
  let paragraphText = "";

  if (location.pathname.includes("/login")) {
    pageTitle = "Log in";
  }

  if (location.pathname.includes("/login/login-form")) {
    pageTitle = "Log in with email";
  }

  if (location.pathname.includes("/login/signup-providers")) {
    pageTitle = "Create an account";
    paragraphText = "Sign up to save your favorite recipes";
  }

  if (location.pathname.includes("/login/login-form/forgot-password")) {
    pageTitle = "Forgot password";
    paragraphText =
      "Enter your email and we'll send you a link to reset your password.";
  }

  if (location.pathname.includes("/login/signup-providers/signup-form")) {
    pageTitle = "Create an account";
    paragraphText = "";
  }
  if (
    location.pathname.includes("/login/signup-providers/signup-confirmation")
  ) {
    pageTitle = "";
    paragraphText = "";
  }

  const paragraphStyle = {
    paddingBottom: paragraphText ? "3rem" : "0",
  };

  return (
    <header className="login__header">
      <div className="logo">
        <Link to="/" onClick={handleLogoClick}>
          <img
            className="login__heading-logo"
            src={logo}
            title="foodixus"
            alt="logo"
          />
        </Link>
      </div>
      <h2 className={`login__page-title ${getHeaderClass(location.pathname)}`}>
        {pageTitle}
      </h2>
      {paragraphText && (
        <p className="login__page-sub-title" style={paragraphStyle}>
          {paragraphText}
        </p>
      )}
    </header>
  );
}

export default LoginHeader;
