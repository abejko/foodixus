import RecipeResultCard from "./RecipeResultCard";
import { useLoadSearchResultsQuery } from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResults } from "../../store";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { createSelector } from "reselect";

function RecipeResults({ paginatedResults, setPage }) {
  const dispatch = useDispatch();

  // Create a memoized selector using createSelector
  const selectSearchData = createSelector(
    (state) => state.recipe.search.query,
    (state) => state.recipe.search.results,
    (query, results) => ({ query, results })
  );

  // Use the memoized selector
  const { query, results } = useSelector(selectSearchData);

  const {
    data: searchResults,
    isLoading,
    error,
  } = useLoadSearchResultsQuery(query);

  console.log("searchResults:", searchResults);

  useEffect(() => {
    if (searchResults) {
      // Map the fetched data to desired result format and update the Redux store
      const mappedResults = searchResults.data.recipes.map((rec) => {
        return {
          id: rec.id,
          title: rec.title,
          image: rec.image_url,
          publisher: rec.publisher,
          ...(rec.key && { key: rec.key }),
        };
      });

      console.log("Mapped Results", mappedResults);

      dispatch(setSearchResults(mappedResults));
      // Start pagination from page 1 after every new search
      setPage(1);
    }
  }, [searchResults, dispatch, setPage]);

  let content;

  if (isLoading) {
    const flexCenterStyle = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "50vh",
    };

    content = (
      <div className="loading-spinner" style={flexCenterStyle}>
        <ClipLoader color="#68A118" loading={isLoading} size={80} />
      </div>
    );
  }

  if (error) {
    content = "There is an error";
  }

  return (
    <>
      <h3 className="search-results__title">
        {results.length === 0
          ? "No matches found, please initiate a search"
          : `${results.length} suggested recipes`}
      </h3>

      <div>{content}</div>

      <div className="recipes">
        <RecipeResultCard paginatedResults={paginatedResults} />
      </div>
    </>
  );
}

export default RecipeResults;
