import { Link } from "react-router-dom";
import { useLogout } from "../../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import { useActiveTabContext } from "../../hooks/use-active-tab-context";

function NavDropdown({ setIsDropdownOpen, dropdownRef }) {
  const { logout, isLoading } = useLogout();

  const navigate = useNavigate();

  const { setActiveTab } = useActiveTabContext();

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div
      className={`signin__dropdown`}
      onMouseLeave={() => setIsDropdownOpen(false)}
      ref={dropdownRef}
    >
      <Link disabled={isLoading} onClick={handleLogout}>
        Log out
      </Link>
      <Link to="/dashboard/account" onClick={() => setActiveTab("saved")}>
        My profile
      </Link>
      <Link to="/dashboard/saved-recipes" onClick={() => setActiveTab("saved")}>
        Saved recipes
      </Link>
      <Link
        to="/dashboard/created-recipes"
        onClick={() => setActiveTab("saved")}
      >
        Add recipe
      </Link>
    </div>
  );
}

export default NavDropdown;
