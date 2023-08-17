import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  setRecipe,
  addSavedRecipe,
  deleteSavedRecipe,
  setSelectedResultId,
  useLoadRecipeQuery,
} from "../../store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";
import RecipeIngredients from "./RecipeIngredients";
import RecipeInfo from "./RecipeInfo";

function RecipeDetails() {
  const dispatch = useDispatch();
  //  extract the id parameter from the route URL.
  const { id } = useParams();

  const { data, isLoading, error } = useLoadRecipeQuery(id);
  const recipe = useSelector((state) => state.recipe.recipe);

  const savedRecipeIds = useSelector((state) =>
    state.recipe.savedRecipes.map((recipe) => recipe.id)
  );
  const isSaved = (recipeId) => savedRecipeIds.includes(recipeId);

  // --------------------------------------------------------
  // useEffect: Fetch and set recipe data

  useEffect(() => {
    if (data) {
      // Create a recipe object from the fetched data
      const createRecipeObject = (data) => {
        const { recipe } = data.data;
        return {
          id: recipe.id,
          title: recipe.title,
          publisher: recipe.publisher,
          sourceUrl: recipe.source_url,
          image: recipe.image_url,
          servings: recipe.servings,
          cookingTime: recipe.cooking_time,
          ingredients: recipe.ingredients,
          ...(recipe.key && { key: recipe.key }),
        };
      };

      // Dispatch an action to set the recipe in the Redux store
      dispatch(setRecipe(createRecipeObject(data)));
    }
  }, [data, dispatch]);

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
    return "There is an error";
  }

  if (!data) {
    return null;
  }

  const handleSavingRecipeClick = (event) => {
    event.stopPropagation();
    event.preventDefault();

    const isCurrentlySaved = isSaved(recipe.id);

    // Toggle the bookmarked status of the recipe
    const updatedRecipe = {
      ...recipe,
      saved: !isCurrentlySaved,
    };

    // Update the recipe in the Redux store
    dispatch(setRecipe(updatedRecipe));

    if (!isCurrentlySaved) {
      // Add the recipe to bookmarks
      dispatch(addSavedRecipe(updatedRecipe));
    } else {
      // Remove the recipe from bookmarks
      dispatch(deleteSavedRecipe(updatedRecipe.id));
    }

    // Set the selected result ID in the Redux store
    dispatch(setSelectedResultId(updatedRecipe.id));
  };

  return (
    <>
      <section className="single-recipe container">
        <div className="recipe-link">
          <p>
            <Link to="/search">Recipes</Link>
            <i className="fa-solid fa-chevron-right"></i> Spring Pasta
          </p>
        </div>

        {/* Recipe start */}
        <div className="recipe">
          <div>{content}</div>

          {/* Recipe Image */}
          <div className="recipe__img-container">
            <Link
              onClick={(event) => handleSavingRecipeClick(event, recipe.id)}
            >
              {isSaved(recipe.id) ? (
                <i className="recipes--item__heart-icon-filled fa-solid fa-heart"></i>
              ) : (
                <i className="recipes--item__heart-icon-outline fa-regular fa-heart"></i>
              )}
            </Link>
            <img
              className="recipe__img"
              src={recipe.image}
              alt={recipe.title}
            />
          </div>
          <div className="recipe__text">
            <h3 className="recipe__text--header">{recipe.title}</h3>
            <RecipeInfo recipe={recipe} />
            <RecipeIngredients recipe={recipe} />
          </div>
        </div>

        <div className="return-back">
          <Link className="return-back__btn" to="/search">
            <i className="fa-solid fa-arrow-left"></i>Back to search results
          </Link>
        </div>
      </section>
    </>
  );
}

export default RecipeDetails;
