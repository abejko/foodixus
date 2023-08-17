import React, { useRef } from "react";
import SearchTagsCard from "./SearchTagsCard";
import tags from "./TagsList";

function SearchTagsCarousel() {
  const carouselRef = useRef(null);

  const calculateScrollParams = () => {
    return {
      scrollWidth: carouselRef.current.scrollWidth,
      clientWidth: carouselRef.current.clientWidth,
    };
  };

  const handleScroll = (scrollOffset) => {
    const { scrollWidth, clientWidth } = calculateScrollParams();
    const currentScrollPosition = carouselRef.current.scrollLeft;
    const newScrollPosition = currentScrollPosition + scrollOffset;

    if (scrollOffset < 0) {
      carouselRef.current.scrollLeft =
        newScrollPosition < 0 ? scrollWidth - clientWidth : newScrollPosition;
    } else {
      carouselRef.current.scrollLeft =
        newScrollPosition >= scrollWidth - clientWidth ? 0 : newScrollPosition;
    }
  };

  return (
    <div className="carousel">
      <button
        className="carousel__arrow--left"
        id="arrow-left"
        onClick={() => handleScroll(-200)}
      >
        <i className="fa-solid fa-chevron-left"></i>
      </button>

      <div className="carousel__viewport" ref={carouselRef}>
        <ul className="carousel__search-tags" id="carousel">
          {tags.map((tag, index) => (
            <SearchTagsCard key={index} tag={tag} />
          ))}
        </ul>
      </div>

      <button
        className="carousel__arrow--right"
        id="arrow-right"
        onClick={() => handleScroll(200)}
      >
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default SearchTagsCarousel;
