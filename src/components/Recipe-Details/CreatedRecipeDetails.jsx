import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import RecipeInfo from "./RecipeInfo";
import { useParams } from "react-router-dom";

function CreatedRecipeDetails() {
  const { id } = useParams(); // Get the id from the route parameters
  const { createdRecipes } = useSelector((state) => state.recipe);

  const recipe = createdRecipes.find((recipe) => recipe.id === id);

  // console.log("Recipe ID:", id);
  // console.log("Found Recipe:", recipe);
  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <section className="single-recipe container">
      <div className="recipe-link">
        <p>
          <Link to="/dashboard/created-recipes">Created Recipes</Link>
          <i className="fa-solid fa-chevron-right"></i> {recipe.title}
        </p>
      </div>

      {/* Recipe start */}
      <div className="recipe">
        <div className="recipe__img-container">
          <img
            className="recipe__img"
            src={recipe.image_url}
            alt={recipe.title}
          />
        </div>
        <div className="recipe__text">
          <h3 className="recipe__text--header">{recipe.title}</h3>
          <RecipeInfo recipe={recipe} />
          <div>
            <h3 className="recipe__title">Ingredients </h3>
            <ul className="recipe__ingredient-list">
              {recipe.ingredients &&
                recipe.ingredients.map((ingredient, index) => (
                  <li key={index} className="recipe__ingredient">
                    <div className="recipe__check-icon">
                      <i className="fa-solid fa-check"></i>
                    </div>
                    <div className="recipe__quantity">
                      {ingredient.quantity}
                    </div>
                    <div className="recipe__description">
                      {ingredient.itemName}
                    </div>
                  </li>
                ))}
            </ul>
            {/* ingredients list end */}
          </div>
        </div>
      </div>

      <div className="return-back">
        <Link className="return-back__btn" to="/dashboard/created-recipes">
          <i className="fa-solid fa-arrow-left"></i>Back to created recipes
        </Link>
      </div>
    </section>
  );
}

export default CreatedRecipeDetails;
