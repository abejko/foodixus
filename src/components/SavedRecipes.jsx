import Pagination from "../components/Pagination";
import { useSelector } from "react-redux";
import RecipeResultCard from "./Recipe-Results/RecipeResultCard";
import { usePagination } from "../hooks/usePagination";

function SavedRecipes() {
  const savedRecipes = useSelector((state) => state.recipe.savedRecipes);

  const resultsPerPage = 12;
  const {
    page,
    totalPages,
    paginatedResults,
    showPagination,
    handlePageChange,
  } = usePagination(savedRecipes, resultsPerPage);

  return (
    <div className="saved-recipes">
      {savedRecipes.length === 0 ? (
        <p className="no-recipe-message">
          You have no saved recipes, start saving your first recipe
        </p>
      ) : (
        <>
          <p className="no-recipe-message">
            You have <strong>{savedRecipes.length}</strong> saved recipes
          </p>
          <div className="recipes">
            {paginatedResults.map((savedRecipe) => (
              <RecipeResultCard
                key={savedRecipe.id}
                paginatedResults={[savedRecipe]} // Pass the savedRecipe as an array to match the paginatedResults format
              />
            ))}
          </div>
          {showPagination && (
            <Pagination
              totalPages={totalPages}
              curPage={page}
              handlePageChange={handlePageChange}
            />
          )}
        </>
      )}
    </div>
  );
}

export default SavedRecipes;
