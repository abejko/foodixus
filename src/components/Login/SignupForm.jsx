import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSignup } from "../../hooks/useSignup";

function SignupForm() {
  const navigate = useNavigate();
  const { signup, isLoading } = useSignup();
  const { register, formState, reset, handleSubmit } = useForm();
  const { errors } = formState;

  const [showPassword, setShowPassword] = useState(false);

  const handleShowHidePassword = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async ({ email, password }) => {
    try {
      await signup(
        { email, password },
        {
          onSettled: (response) => {
            reset();

            console.log("User ID:", response.user.id);
            // Clear the user's data using the reducer actions

            // Navigate to the signup confirmation page
            navigate("../signup-confirmation");
          },
        }
      );
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="login__form login__form--email-login ">
      <div className="login__form-wrapper">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="js-form"
          method="post"
        >
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email Address
            </label>
            <input
              type="text"
              id="email"
              name="email"
              required
              placeholder="yourname@example.com"
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Please provide a valid email address",
                },
              })}
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                required
                placeholder="Enter your password"
                {...register("password", {
                  required: "This field is required",
                  minLength: {
                    value: 8,
                    message: "Password needs a minimum of 8 characters",
                  },
                })}
              />
              <button
                className="js-show-hide-password"
                onClick={handleShowHidePassword}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
            {errors.password && (
              <p className="error-message">{errors.password.message}</p>
            )}
          </div>

          <div className="form-actions">
            <div className="form-options"></div>

            <div className="form-buttons">
              <button
                className="js-button-submit form-buttons__submit-form"
                disabled={formState.isSubmitting}
              >
                {isLoading ? "Signing up..." : "Join now"}
              </button>
            </div>

            <div className="info">
              <span>
                By registering, you agree to the
                <Link to="/terms-and-privacy" className="info--link">
                  Terms of Use and Privacy Policy
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupForm;
