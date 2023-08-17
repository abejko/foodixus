import { IoSearchSharp } from "react-icons/io5";
import { setSearchQuery } from "../../store";
import { useDispatch, useSelector } from "react-redux";

function SearchFieldHead() {
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.recipe.search);

  const handleChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
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
