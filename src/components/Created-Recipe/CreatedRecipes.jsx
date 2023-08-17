import Pagination from "../Pagination";
import circlePlus from "../../assets/circle-plus.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { usePagination } from "../../hooks/usePagination";
import CreatedRecipeCard from "./CreatedRecipeCard";

function CreatedRecipes() {
  const createdRecipes = useSelector((state) => state.recipe.createdRecipes);

  const resultsPerPage = 11;
  const {
    page,
    totalPages,
    paginatedResults,
    showPagination,
    handlePageChange,
  } = usePagination(createdRecipes, resultsPerPage);

  return (
    <div className="saved-recipes">
      <div className="saved-recipes">
        {createdRecipes.length === 0 ? (
          <>
            <p className="no-recipe-message">
              No recipes yet. Begin crafting your first one now!
            </p>
            <div className="recipes">
              <div className="add-new-recipe no-recipes">
                <Link to="/add-recipe" className="add-new-recipe__text-box">
                  <img src={circlePlus} alt="circle-plus icon" />
                  <p>Add new Recipe</p>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <p className="no-recipe-message">
              You have <strong>{createdRecipes.length}</strong> created recipes
            </p>
            <div className="recipes">
              <div className="add-new-recipe">
                <Link to="/add-recipe" className="add-new-recipe__text-box">
                  <img src={circlePlus} alt="circle-plus icon" />
                  <p>Add new Recipe</p>
                </Link>
              </div>
              {paginatedResults.map((createdRecipe) => (
                <CreatedRecipeCard
                  key={createdRecipe.id}
                  createdRecipe={createdRecipe} // Pass the individual createdRecipe object
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
    </div>
  );
}

export default CreatedRecipes;
