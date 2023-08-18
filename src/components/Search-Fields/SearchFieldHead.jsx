import { IoSearchSharp } from "react-icons/io5";
import { setSearchQuery } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function SearchFieldHead() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.recipe.search);

  const handleChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="search" role="search">
        <div className="search__icon">
          <IoSearchSharp />
        </div>
        <input
          value={query}
          onChange={handleChange}
          type="text"
          className="search__field"
          placeholder="Search for Recipes"
        />
      </form>
    </>
  );
}

export default SearchFieldHead;
