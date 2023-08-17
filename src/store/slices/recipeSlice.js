import { createSlice } from "@reduxjs/toolkit";

const getSavedRecipesFromLocalStorage = () => {
  const savedRecipes = localStorage.getItem("savedRecipes");
  return savedRecipes ? JSON.parse(savedRecipes) : [];
};

const getCreatedRecipesFromLocalStorage = () => {
  const createdRecipes = localStorage.getItem("createdRecipes");
  return createdRecipes ? JSON.parse(createdRecipes) : [];
};

const recipeSlice = createSlice({
  name: "recipe",
  initialState: {
    recipe: {},
    search: {
      query: "",
      results: [],
    },
    savedRecipes: getSavedRecipesFromLocalStorage(),
    createdRecipes: getCreatedRecipesFromLocalStorage(),
    selectedResultId: null,
  },
  reducers: {
    setRecipe: (state, action) => {
      console.log("setRecipes payload:", action.payload); // Log the payload
      state.recipe = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.search.query = action.payload;
    },
    clearSearchQuery: (state, action) => {
      state.search.query = "";
    },
    setSearchResults: (state, action) => {
      console.log("setSearchResults payload:", action.payload); // Log the payload
      state.search.results = action.payload;
    },
    addSavedRecipe: (state, action) => {
      const recipe = action.payload;
      state.savedRecipes.push(recipe);
      if (recipe.id === state.recipe.id) {
        state.recipe.saved = true;
      }

      localStorage.setItem("savedRecipes", JSON.stringify(state.savedRecipes));
    },
    deleteSavedRecipe: (state, action) => {
      const id = action.payload;
      const index = state.savedRecipes.findIndex((recipe) => recipe.id === id);

      if (index !== -1) {
        state.savedRecipes.splice(index, 1);
      }

      if (state.recipe.id === id) {
        state.recipe.saved = false;
      }

      localStorage.setItem("savedRecipes", JSON.stringify(state.savedRecipes));
    },
    addCreatedRecipe: (state, action) => {
      const recipe = action.payload;
      state.createdRecipes.push(recipe);
      localStorage.setItem(
        "createdRecipes",
        JSON.stringify(state.createdRecipes)
      );
    },
    deleteCreatedRecipe: (state, action) => {
      const id = action.payload;
      const index = state.createdRecipes.findIndex(
        (recipe) => recipe.id === id
      );

      if (index !== -1) {
        state.createdRecipes.splice(index, 1);
      }

      if (state.recipe.recipe && state.recipe.recipe.id === id) {
        state.recipe.recipe.saved = false;
      }

      localStorage.setItem(
        "createdRecipes",
        JSON.stringify(state.createdRecipes)
      );
    },

    setSelectedResultId: (state, action) => {
      state.selectedResultId = action.payload;
    },
  },
});

export const {
  setRecipe,
  setSearchQuery,
  clearSearchQuery,
  setSearchResults,
  addSavedRecipe,
  addCreatedRecipe,
  deleteSavedRecipe,
  deleteCreatedRecipe,
  setSelectedResultId,
} = recipeSlice.actions;

export const recipeReducer = recipeSlice.reducer;
