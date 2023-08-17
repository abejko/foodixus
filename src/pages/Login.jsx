import LoginHeader from "../components/Login/LoginHeader";
import { Outlet } from "react-router-dom";

function Login() {
  return (
    <div className="login__container">
      <div className="login__cta-wrapper">
        <div className="login__cta">
          {/* login header */}
          <LoginHeader />

          {/* login content */}

          <Outlet />
        </div>
      </div>

      <div className="login__image"></div>
    </div>
  );
}

export default Login;
