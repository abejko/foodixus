import AddRecipeForm from "./AddRecipeForm";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addCreatedRecipe } from "../../store";
import { nanoid } from "@reduxjs/toolkit";

function AddRecipe() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    title: "", // Initialize with an empty string
    cookingTime: "",
    servings: "",
    ingredients: [{ itemName: "", quantity: "" }],
  });

  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const recipeId = nanoid();

    // Create a recipe object from the form data
    const recipeData = {
      id: recipeId,
      title: formData.title,
      cookingTime: formData.cookingTime,
      servings: formData.servings,
      image_url: formData.image,
      ingredients: formData.ingredients,
    };

    // Save recipe to createdRecipes
    dispatch(addCreatedRecipe(recipeData));

    // Success message
    setSubmissionStatus("success");

    // Reset the form or close the modal
    // ...
  };

  const handleCreateAnotherRecipe = () => {
    // Reset form data and submission status for a new recipe
    setFormData({
      title: "",
      cookingTime: "",
      servings: "",
      ingredients: [{ itemName: "", quantity: "" }],
    });
    setSubmissionStatus(null);
  };

  return (
    <div className="add-recipe container">
      <div className="recipe-link">
        <p>
          <Link to="/dashboard/created-recipes">Created Recipes</Link>
          <i className="fa-solid fa-chevron-right"></i> Add recipe
        </p>
      </div>

      <div className="add-recipe-window ">
        {submissionStatus !== "success" ? (
          <>
            <h3 className="add-recipe__title">Add Recipe</h3>
            <AddRecipeForm
              formData={formData}
              setFormData={setFormData}
              handleSubmit={handleSubmit}
            />
          </>
        ) : (
          <div className="success">
            <h1 className="success__heading">
              You have successfully uploaded the recipe!
            </h1>
            <div className="success__buttons">
              <button onClick={handleCreateAnotherRecipe}>
                Create Another Recipe
              </button>
              <Link to="/dashboard/created-recipes">
                <button>Return to Created Recipes</button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default AddRecipe;
