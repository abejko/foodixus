import SearchTagsCarousel from "../components/Search-Tags/SearchTagsCarousel";
import Pagination from "../components/Pagination";
import RecipeResults from "../components/Recipe-Results/RecipeResults";
import { useSelector } from "react-redux";
import { usePagination } from "../hooks/usePagination";

function SearchResults() {
  const { results } = useSelector((state) => state.recipe.search);

  const resultsPerPage = 12;
  const {
    page,
    setPage,
    totalPages,
    paginatedResults,
    showPagination,
    handlePageChange,
  } = usePagination(results, resultsPerPage);

  return (
    <>
      <div className="recipes-search-results container">
        <SearchTagsCarousel />
        <div className="search-results">
          <RecipeResults
            setPage={setPage}
            paginatedResults={paginatedResults}
          />
          {showPagination && (
            <Pagination
              totalPages={totalPages}
              curPage={page}
              handlePageChange={handlePageChange}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default SearchResults;
