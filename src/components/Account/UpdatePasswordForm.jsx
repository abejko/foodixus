import { useForm } from "react-hook-form";
import { useUpdateUser } from "../../hooks/useUpdateUser";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;

  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form__row">
        <label> New password (min 8 chars)</label>

        <input
          className="form__input"
          type="password"
          id="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </div>

      <div className="form__row">
        <label>Confirm password</label>
        <input
          className="form__input"
          type="password"
          autoComplete="new-password"
          id="passwordConfirm"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().password === value || "Passwords need to match",
          })}
        />
      </div>
      <div className="form__row">
        <button className="form__btn " onClick={reset} type="reset">
          Cancel
        </button>
        <button className="form__btn " disabled={isUpdating}>
          Update password
        </button>
      </div>
    </form>
  );
}

export default UpdatePasswordForm;
