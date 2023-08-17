function RecipeInfo({ recipe }) {
  return (
    <div className="recipe__details">
      <div className="recipe__info">
        <i className="fa-regular fa-clock"></i>
        <span className="recipe__info-data recipe__info-data--minutes">
          {recipe.cookingTime}
        </span>
        <span className="recipe__info-text">minutes</span>
      </div>
      <div className="recipe__info">
        <i className="fa-regular fa-clock"></i>
        <span className="recipe__info-data recipe__info-data--people">
          {recipe.servings}
        </span>
        <span className="recipe__info-text">servings</span>
      </div>
    </div>
  );
}

export default RecipeInfo;
