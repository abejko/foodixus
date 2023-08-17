import logo from "../../assets/foodixus-logo.svg";
import { Link } from "react-router-dom";
import { HiOutlineUserCircle } from "react-icons/hi2";

function HeaderHome() {
  return (
    <>
      <header>
        <div className="background">
          <div className="container">
            <div className="header">
              <Link to="/">
                <img className="header__logo" src={logo} alt="logo" />
              </Link>
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

export default HeaderHome;
