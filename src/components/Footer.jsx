import { Link } from "react-router-dom";
import { BiLogoInstagram } from "react-icons/bi";

function Footer() {
  return (
    <>
      <footer className="footer container ">
        <ul className="footer__list  ">
          <div>
            <li className="footer__link">
              {/* footer__link--instagram */}
              <Link href="#" className="footer__link--instagram">
                <BiLogoInstagram />
              </Link>
            </li>
          </div>

          <div className="footer__list--divider"></div>

          <div>
            <li className="footer__link--text">
              &copy;2023 foodiXus. All rights reserved.
            </li>
          </div>
        </ul>
      </footer>
    </>
  );
}

export default Footer;
