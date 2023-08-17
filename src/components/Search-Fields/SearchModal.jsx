import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../store";
import { useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";

function SearchModal({ setIsSearchModalOpen }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { query } = useSelector((state) => state.recipe.search);

  const handleSearchModalCloseClick = () => {
    setIsSearchModalOpen(false);
  };

  const handleChange = (event) => {
    dispatch(setSearchQuery(event.target.value));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?query=${query}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit} class="search-modal" role="search">
        <div class="search-modal__icon">
          <IoSearchSharp />
        </div>
        <input
          value={query}
          onChange={handleChange}
          type="text"
          class="search-modal__input"
          placeholder="Search for Recipes"
        />

        <div
          class="search-modal__close-icon"
          onClick={handleSearchModalCloseClick}
        >
          <i class="fas fa-times"></i>
        </div>
      </form>
    </>
  );
}

export default SearchModal;
