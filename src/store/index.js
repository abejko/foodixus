import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {
  recipeReducer,
  setRecipe,
  setSearchQuery,
  clearSearchQuery,
  setSearchResults,
  addSavedRecipe,
  addCreatedRecipe,
  deleteSavedRecipe,
  deleteCreatedRecipe,
  setSelectedResultId,
} from "./slices/recipeSlice";

import { recipesApi } from "./apis/recipesApi";

const store = configureStore({
  reducer: {
    recipe: recipeReducer,
    [recipesApi.reducerPath]: recipesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipesApi.middleware),
});



setupListeners(store.dispatch);

export {
  store,
  setRecipe,
  setSearchQuery,
  clearSearchQuery,
  setSearchResults,
  addSavedRecipe,
  addCreatedRecipe,
  deleteSavedRecipe,
  deleteCreatedRecipe,
  setSelectedResultId,
};

export {
  useLoadRecipeQuery,
  useLoadSearchResultsQuery,
  useUploadRecipeMutation,
} from "./apis/recipesApi";
