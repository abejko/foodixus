function RecipeIngredients({ recipe }) {
  return (
    <div>
      <h3 className="recipe__title">Ingredients </h3>
      <ul className="recipe__ingredient-list">
        {recipe.ingredients &&
          recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="recipe__ingredient">
              <div className="recipe__check-icon">
                <i className="fa-solid fa-check"></i>
              </div>
              <div className="recipe__quantity">{ingredient.quantity}</div>
              <div className="recipe__description">
                <span className="recipe__unit">{ingredient.unit}</span>
                {ingredient.description}
              </div>
            </li>
          ))}
      </ul>
      {/* ingredients list end */}
    </div>
  );
}

export default RecipeIngredients;
