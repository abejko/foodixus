import { IoSearchSharp } from "react-icons/io5";
import { setSearchQuery } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SearchFieldHero() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { query } = useSelector((state) => state.recipe.search);

  const handleChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="hero-search" role="search">
        <div className="hero-search__icon">
          <IoSearchSharp />
        </div>
        <input
          value={query}
          onChange={handleChange}
          type="text"
          className="hero-search__field"
          placeholder="Search for Recipes"
        />
      </form>
    </>
  );
}

export default SearchFieldHero;
