import { Link } from "react-router-dom";

function ForgotPassword() {
  return (
    <div className="login__form login__form--email-login ">
      <div className="login__form-wrapper">
        <form
          id="kc-reset-password-form"
          className="login__form login__form--pw-reset js-form"
          action="#"
          method="post"
        >
          <div className="form-group ">
            <div className="">
              <label htmlFor="username" className="form-label">
                Email Address
              </label>
            </div>
            <div className="input-wrapper">
              <input
                autocomplete="off"
                type="text"
                id="username"
                name="username"
                className="js-username"
                autofocus=""
                placeholder="yourname@example.com"
              />
            </div>
          </div>
          <div className="form-buttons">
            <button className="js-button-submit form-buttons__submit form-buttons__forgot-password">
              Reset Password
            </button>

            <div className="info">
              <Link to="login" className="info--link">
                Back to log in
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
