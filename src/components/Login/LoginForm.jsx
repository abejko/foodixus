import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("andi@example.com");
  const [password, setPassword] = useState("pass2023");

  const handleShowHidePassword = () => {
    setShowPassword(!showPassword); // Toggle showPassword state
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) return;

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
        },
      }
    );
  };

  const { login, isLoading } = useLogin();

  return (
    <div className="login__form login__form--email-login ">
      <div className="login__form-wrapper">
        <form onSubmit={handleSubmit} className="js-form" method="post">
          <div className="form-group">
            <label htmlFor="username" className="form-label">
              Email Address
            </label>

            <input
              className="js-username"
              type="email"
              id="email"
              // This makes this form better for pasasword managers
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              disabled={isLoading}
              required
              placeholder="yourname@example.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                className="js-password password  "
                autoComplete="username"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={isLoading}
                required
                placeholder="Enter your password"
              />
              <button
                className="js-show-hide-password  "
                onClick={handleShowHidePassword}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
          </div>

          <div className="form-actions">
            <div className="form-options">
              <div className="checkbox">
                <input
                  id="rememberMe"
                  name="rememberMe"
                  type="checkbox"
                  className="checkbox__input"
                />
                <label htmlFor="rememberMe" className="checkbox__label">
                  Keep me logged in
                </label>
              </div>
            </div>

            <div className="form-buttons">
              <button
                className="js-button-submit form-buttons__submit "
                disabled={isLoading}
              >
                Log in
              </button>
            </div>

            <div className="info">
              <span>
                <Link
                  to="/login/login-form/forgot-password"
                  className="info--link"
                >
                  Forgot password?
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
