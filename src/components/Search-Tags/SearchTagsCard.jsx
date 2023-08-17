import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "../../store";

function SearchTagsCard({ tag }) {
  const dispatch = useDispatch();

  const handleTagClick = () => {
    dispatch(setSearchQuery(tag));
  };

  return (
    <li>
      <Link
        to={`/search?query=${tag}`}
        className="btn-tags hero__search-tags--link"
        onClick={handleTagClick}
      >
        {tag}
      </Link>
    </li>
  );
}

export default SearchTagsCard;
