import { useUser } from "../../hooks/useUser";
import { useState } from "react";
import { useUpdateUser } from "../../hooks/useUpdateUser";

function UpdateUserDataForm() {
  const {
    user: { email, user_metadata: { fullName: currentFullName } = {} } = {},
  } = useUser();

  const { updateUser, isUpdating } = useUpdateUser();

  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullName) return;
    updateUser(
      { fullName, avatar },
      {
        onSuccess: () => {
          setAvatar(null);
          e.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  if (!email) {
    // User data is not yet available
    return null; // or a loading indicator
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form__row">
        <label>Email address</label>
        <input className="form__input" value={email} disabled />
      </div>

      <div className="form__row">
        <label>Full name</label>
        <input
          className="form__input"
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          id="fullName"
          disabled={isUpdating}
        />
      </div>

      <div className="form__row">
        <label>Avatar image</label>
        <input
          className="form__file-input"
          id="avatar"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
          disabled={isUpdating}
          type="file"
        />
        <span>No file chosen</span>
      </div>

      <div className="form__row">
        <button
          className="form__btn "
          type="reset"
          variation="secondary"
          disabled={isUpdating}
          onClick={handleCancel}
        >
          Cancel
        </button>
        <button className="form__btn " disabled={isUpdating}>
          Update account
        </button>
      </div>
    </form>
  );
}

export default UpdateUserDataForm;
