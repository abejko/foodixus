import logo from "../../assets/foodixus-logo.svg";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi2";
import SearchFieldHead from "../Search-Fields/SearchFieldHead";

function HeaderSearchResults() {
  return (
    <>
      <header>
        <div className="background">
          <div className="container">
            <div className="header">
              <Link to="/">
                <img className="header__logo" src={logo} alt="logo" />
              </Link>

              <SearchFieldHead />

              <form className="search-modal" role="search">
                <div className="search-modal__icon">
                  <i className="fas fa-search"></i>
                </div>
                <input
                  type="text"
                  className="search-modal__input"
                  placeholder="Search for Recipes"
                />

                <div className="search-modal__close-icon">
                  <i className="fas fa-times"></i>
                </div>
              </form>

              <div className="signin">
                <div>
                  <Link to="/login" className="signin__link">
                    <HiOutlineUserCircle className="signin__icon" />
                    <span className="signin__text">Log In</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default HeaderSearchResults;
