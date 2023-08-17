import UpdateUserDataForm from "./UpdateUserDataForm";
import UpdatePasswordForm from "./UpdatePasswordForm";

function UserAccount() {
  return (
    <>
      <div className="account">
        <h1 className="account__main-title">Update your account</h1>
        <div className="account__grid-two-cols">
          <div className="account__data-form">
            <h3 className="account__sub-title">Update user data</h3>
            <UpdateUserDataForm />
          </div>
          <div className="account__data-form">
            <h3 className="account__sub-title">Update password</h3>
            <UpdatePasswordForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default UserAccount;
