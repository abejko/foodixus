import { useLogout } from "../../hooks/useLogout";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import SearchFieldMobile from "../Search-Fields/SearchFieldMobile";
import NavMobileItem from "./NavMobileItem";

function NavMobile({ closeMobileMenu, isNavMobileOpen }) {
  const { logout, isLoading } = useLogout();

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    try {
      await logout(); // Call the logout function
      navigate("/login"); // Redirect to login page
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const { isAuthenticated } = useUser();

  return (
    <>
      {isNavMobileOpen && (
        <div className="mobile-nav-toggle">
          <SearchFieldMobile
            isNavMobileOpen={isNavMobileOpen}
            closeMobileMenu={closeMobileMenu}
          />

          <ul className="mobile-nav-toggle__list">
            <NavMobileItem
              to="/login"
              text={isAuthenticated ? "Log Out" : "Log In"}
              onClick={!isAuthenticated ? () => navigate("/login") : undefined}
              disabled={isLoading}
              handleClick={isAuthenticated ? handleLogout : undefined}
            />

            {isAuthenticated ? (
              <>
                <NavMobileItem
                  to="/dashboard"
                  onClick={() => closeMobileMenu()}
                  text={"My Profile"}
                />

                <NavMobileItem
                  to="/dashboard/saved-recipes"
                  onClick={() => closeMobileMenu()}
                  className={
                    location.pathname === "/dashboard/saved-recipes"
                      ? "active-tab"
                      : ""
                  }
                  text={"Saved recipes"}
                />
                <NavMobileItem
                  to="/dashboard/created-recipes"
                  onClick={() => closeMobileMenu()}
                  className={
                    location.pathname === "/dashboard/created-recipes"
                      ? "active-tab"
                      : ""
                  }
                  text={" Add recipe"}
                />
              </>
            ) : null}
          </ul>
        </div>
      )}
    </>
  );
}

export default NavMobile;
