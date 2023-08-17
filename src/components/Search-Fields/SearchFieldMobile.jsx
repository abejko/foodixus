import { IoSearchSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../store";
import { useNavigate } from "react-router-dom";

function SearchFieldMobile({ closeMobileMenu, isNavMobileOpen }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { query } = useSelector((state) => state.recipe.search);

  const handleChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Close the mobile navigation overlay
    closeMobileMenu();
    // Navigate to search results page
    navigate(`/search?query=${query}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      className={`mobile-nav-search ${isNavMobileOpen ? "open" : ""}`}
    >
      <div className="mobile-nav-search__icon">
        <IoSearchSharp />
      </div>
      <input
        onChange={handleChange}
        value={query}
        type="text"
        className="mobile-nav-search__field"
        placeholder="Search for Recipes"
      />
    </form>
  );
}

export default SearchFieldMobile;
