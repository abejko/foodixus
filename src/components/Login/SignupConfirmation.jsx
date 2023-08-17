import { Link } from "react-router-dom";

function SignupConfirmation() {
  return (
    <div className="login__form login__form--email-login ">
      <div className="login__form-wrapper">
        <h2 className="login__account-created">
          Account successfully created!
        </h2>
        <div className="login__return-to-dashboard">
          <Link to="/dashboard">Visit your dashboard</Link>
        </div>
      </div>
    </div>
  );
}

export default SignupConfirmation;
