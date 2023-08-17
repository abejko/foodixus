import { IoSearchSharp } from "react-icons/io5";
import { useState, useEffect, useRef } from "react";
import { HiOutlineUserCircle } from "react-icons/hi2";
import NavDropdown from "./NavDropdown";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import SearchModal from "../Search-Fields/SearchModal";

function LoginMenu({ isNavMobileOpen }) {
  const navigate = useNavigate();
  const myAccountRef = useRef();
  const dropdownRef = useRef();
  const location = useLocation();

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { isAuthenticated, isLoading } = useUser();

  const handleSearchModalClick = () => {
    setIsSearchModalOpen(true);
  };

  const handleMyAccountClick = () => {
    if (window.innerWidth < 1000) {
      navigate("/dashboard/saved-recipes"); // Redirect to dashboard
    } else {
      setIsDropdownOpen(false);
    }
  };

  // Close Search Modal on window resize
  useEffect(() => {
    const handleResize = () => {
      if (isSearchModalOpen) {
        setIsSearchModalOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSearchModalOpen]);

  // Close dropdown when clicked outside
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        myAccountRef.current &&
        !myAccountRef.current.contains(event.target)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const shouldRenderUserLinks = location.pathname !== "/";

  return (
    <>
      {!isSearchModalOpen ? (
        <div className={`signin ${isNavMobileOpen ? "invisible" : ""}`}>
          {/* Don't show at home page */}
          {shouldRenderUserLinks && (
            <div
              className="signin__search-icon"
              tabIndex="0"
              onClick={handleSearchModalClick}
              ref={myAccountRef}
            >
              <IoSearchSharp />
              <div className="signin__divider"></div>
            </div>
          )}

          <div>
            {isAuthenticated ? (
              <div
                className="signin__link"
                onMouseOver={() => setIsDropdownOpen(true)}
                onClick={handleMyAccountClick}
              >
                <HiOutlineUserCircle className="signin__icon" />
                <span className="signin__text">My Account</span>
              </div>
            ) : (
              <Link to="/login" className="signin__link">
                <HiOutlineUserCircle className="signin__icon" />
                <span className="signin__text">Log In</span>
              </Link>
            )}

            {isDropdownOpen && isAuthenticated && (
              <NavDropdown
                dropdownRef={dropdownRef}
                setIsDropdownOpen={setIsDropdownOpen}
              />
            )}
          </div>
        </div>
      ) : (
        <SearchModal setIsSearchModalOpen={setIsSearchModalOpen} />
      )}
    </>
  );
}

export default LoginMenu;
