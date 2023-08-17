import { Link } from "react-router-dom";

function NavMobileItem({ to, text, onClick, disabled, handleClick }) {
  return (
    <li>
      <div
        className="mobile-nav-toggle__list--link-container"
        onClick={onClick}
      >
        <Link
          to={to}
          className={`mobile-nav-toggle__list--link ${
            disabled ? "disabled" : ""
          }`}
          onClick={handleClick}
        >
          {text}
        </Link>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </li>
  );
}

export default NavMobileItem;
