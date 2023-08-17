import { useState } from "react";
import SearchTagsCard from "./SearchTagsCard";
import tags from "./TagsList";

function SearchTags() {
  const [shownTagsCount, setShownTagsCount] = useState(
    Math.ceil(tags.length / 5)
  );
  const [seeMoreClicks, setSeeMoreClicks] = useState(0);

  const maxTagsToShow = Math.ceil(tags.length / 5) * (seeMoreClicks + 1);
  const displayedTags = tags.slice(0, maxTagsToShow);

  const handleSeeMoreClick = () => {
    setSeeMoreClicks((prevClicks) => prevClicks + 1);
    setShownTagsCount(Math.ceil(tags.length / 5) * (seeMoreClicks + 1));
  };

  return (
    <div className="hero__search-tags">
      <ul className="hero__search-tags--list">
        {displayedTags.map((tag, index) => (
          <SearchTagsCard key={index} tag={tag} />
        ))}
      </ul>
      {shownTagsCount < tags.length && seeMoreClicks < 4 && (
        <div className="see-more-btn">
          <button onClick={handleSeeMoreClick}>See more</button>
        </div>
      )}
    </div>
  );
}

export default SearchTags;
