// RecipeResultCard.js

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addSavedRecipe,
  deleteSavedRecipe,
  setSelectedResultId,
} from "../../store";
import { createSelector } from "reselect";

function RecipeResultCard({ paginatedResults }) {
  const selectSavedRecipes = (state) => state.recipe.savedRecipes;

  const selectSavedRecipeIds = createSelector(
    [selectSavedRecipes], // The input selectors
    (savedRecipes) => savedRecipes.map((recipe) => recipe.id) // The output selector
  );

  const savedRecipeIds = useSelector(selectSavedRecipeIds);

  const dispatch = useDispatch();

  const isSaved = (recipeId) => savedRecipeIds.includes(recipeId);

  const handleSavingRecipeClick = (event, recipeId) => {
    event.stopPropagation();
    event.preventDefault();

    if (isSaved(recipeId)) {
      dispatch(deleteSavedRecipe(recipeId));
    } else {
      const clickedRecipe = paginatedResults.find(
        (result) => result.id === recipeId
      );
      if (!clickedRecipe) return;

      dispatch(addSavedRecipe(clickedRecipe));
    }

    dispatch(setSelectedResultId(recipeId));
  };

  return (
    <>
      {paginatedResults.map((result) => (
        <div className="recipes--item" key={result.id}>
          <div className="recipes--item__img-placeholder">
            <div onClick={(event) => handleSavingRecipeClick(event, result.id)}>
              {isSaved(result.id) ? (
                <i className="recipes--item__heart-icon-filled fa-solid fa-heart"></i>
              ) : (
                <i className="recipes--item__heart-icon-outline fa-regular fa-heart"></i>
              )}
            </div>
            <img src={result.image} alt={result.title} />
          </div>
          <Link className="recipes--item__text" to={`/${result.id}`}>
            <h4 className="recipes--item__text--main">{result.title}</h4>
            <p className="recipes--item__text--sub">{result.publisher}</p>
          </Link>
        </div>
      ))}
    </>
  );
}

export default RecipeResultCard;
