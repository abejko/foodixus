// RecipeResultCard.js

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteCreatedRecipe, setSelectedResultId } from "../../store";

function CreatedRecipeCard({ createdRecipe }) {
  const createdRecipeIds = useSelector((state) =>
    state.recipe.createdRecipes.map((recipe) => recipe.id)
  );
  const dispatch = useDispatch();

  const isCreated = (recipeId) => createdRecipeIds.includes(recipeId);

  const handleSavingRecipeClick = (event, recipeId) => {
    event.stopPropagation();
    event.preventDefault();

    if (isCreated(recipeId)) {
      dispatch(deleteCreatedRecipe(recipeId));
    }

    dispatch(setSelectedResultId(recipeId));
  };

  return (
    <div className="recipes--item">
      <div className="recipes--item__img-placeholder">
        <div
          onClick={(event) => handleSavingRecipeClick(event, createdRecipe.id)}
        >
          {isCreated(createdRecipe.id) ? (
            <i className="recipes--item__heart-icon-filled fa-solid fa-heart"></i>
          ) : (
            <i className="recipes--item__heart-icon-outline fa-regular fa-heart"></i>
          )}
        </div>
        <img src={createdRecipe.image_url} alt={createdRecipe.title} />
      </div>
      <Link
        className="recipes--item__text"
        to={`/created-recipes/${createdRecipe.id}`}
      >
        <h4 className="recipes--item__text--main">{createdRecipe.title}</h4>
      </Link>
    </div>
  );
}

export default CreatedRecipeCard;
