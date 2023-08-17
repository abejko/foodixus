import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { GrFacebookOption } from "react-icons/gr";
import { AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";

function LoginProviders() {
  return (
    <div className="login__content">
      <div className="login__social-providers">
        <ul className="login__social-providers-list">
          {/* login with email */}
          <li className="login__social-providers-list-item">
            <Link
              to="/login/login-form"
              className="login__button button--outlined "
            >
              <div className="login__button-wrapper">
                <HiOutlineMail className="icon icon-email" size={22} />
                <span>Log in with Email</span>
              </div>
            </Link>
          </li>

          {/* login with fb */}
          <li className="login__social-providers-list-item">
            <Link
              className="login__button button--outlined login__button--facebook "
              type="button"
              href="#"
            >
              <div className="login__button-wrapper">
                <GrFacebookOption className="icon icon-fb" size={22} />
                <span className="">Log in with Facebook</span>
              </div>
            </Link>
          </li>

          {/* login with google */}
          <li className="login__social-providers-list-item">
            <Link
              className="login__button button--outlined login__button login__button--google button--outlined "
              type="button"
              href="#"
            >
              <div className="login__button-wrapper">
                <AiOutlineGoogle className="icon icon-google" size={22} />
                <span className="">Log in with Google</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>

      <div className="info">
        <span>
          Don't have an account?
          <Link to="/login/signup-providers" className="info--link">
            Join now
          </Link>
        </span>
      </div>
    </div>
  );
}

export default LoginProviders;
