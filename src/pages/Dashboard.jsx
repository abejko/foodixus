import DefaultUser from "../assets/default-user.jpg";
import { useLogout } from "../hooks/useLogout";
import { Outlet, Link, useNavigate, useLocation } from "react-router-dom";
import { useUser } from "../hooks/useUser";

function Dashboard() {
  const { logout, isLoading } = useLogout();

  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useUser();

  const fullName = user?.user_metadata?.fullName || "Update your full name";
  const avatar = user?.user_metadata?.avatar;

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="user-dashboard container">
      <div className="user-section">
        <div className="user-section__photo open-files">
          <img src={avatar || DefaultUser} alt="user profile" />
        </div>
        <div className="user">
          <h3 className="user__name">{fullName || "Update Your Name"}</h3>
          <button
            className="user__logout"
            disabled={isLoading}
            onClick={handleLogout}
          >
            Log Out
          </button>
        </div>
      </div>

      <div className="text-box">
        <Link
          to="saved-recipes"
          className={`text-box__saved-recipes ${
            location.pathname === "/dashboard/saved-recipes" ? "active-tab" : ""
          }`}
        >
          Saved recipes
        </Link>
        <Link
          to="created-recipes"
          className={`text-box__created-recipes ${
            location.pathname === "/dashboard/created-recipes"
              ? "active-tab"
              : ""
          }`}
        >
          Created Recipes
        </Link>
        <Link
          to="account"
          className={`text-box__seetings ${
            location.pathname === "/dashboard/account" ? "active-tab" : ""
          }`}
        >
          seetings
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

export default Dashboard;
