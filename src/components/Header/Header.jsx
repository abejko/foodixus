import logo from "../../assets/foodixus-logo.svg";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import SearchFieldHead from "../Search-Fields/SearchFieldHead";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../store";
import NavMobile from "./NavMobile";
import { useState, useEffect } from "react";
import LoginMenu from "./LoginMenu";

function Header() {
  const dispatch = useDispatch();
  const location = useLocation();
  const isHome = location.pathname === "/";
  console.log("Is Home:", isHome);

  const handleLogoClick = () => {
    // Clear the search query from Redux state and the URL
    dispatch(setSearchQuery(""));
  };

  const [isNavMobileOpen, setIsNavMobileOpen] = useState(false);

  // Toggle mobile navigation
  const toggleNavMobile = () => {
    setIsNavMobileOpen(!isNavMobileOpen);
  };

  // Close mobile navigation on window resize
  useEffect(() => {
    const handleResize = () => {
      if (isNavMobileOpen) {
        setIsNavMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isNavMobileOpen]);

  return (
    <>
      <header>
        <div className="background">
          <div className="container">
            <div className="header">
              {/* <!-- Mobile hamburger icon start --> */}
              <button
                className="btn-mobile-nav"
                type="button"
                onClick={toggleNavMobile}
              >
                {!isNavMobileOpen ? (
                  <i className="btn-mobile-nav__hamburger fa-solid fa-bars"></i>
                ) : (
                  <i className="btn-mobile-nav__close fas fa-times"></i>
                )}
              </button>

              {isNavMobileOpen && (
                <NavMobile
                  isNavMobileOpen={isNavMobileOpen}
                  closeMobileMenu={() => setIsNavMobileOpen(false)}
                />
              )}

              <Link to="/" onClick={handleLogoClick}>
                <img className="header__logo" src={logo} alt="logo" />
              </Link>

              {!isHome && <SearchFieldHead />}

              {/* Login Menu*/}
              {!isNavMobileOpen}
              <LoginMenu isNavMobileOpen={isNavMobileOpen} />
            </div>
          </div>
        </div>
      </header>

      {/* <!-- The overlay element --> */}
      {isNavMobileOpen && <div className="mobile-nav-overlay"></div>}
    </>
  );
}

export default Header;
