import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const KEY = "8c14d94e-ca94-4c3c-90cb-ce7eb80ea829";

const recipesApi = createApi({
  reducerPath: "recipesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://forkify-api.herokuapp.com/api/v2/recipes",
  }),
  endpoints: (builder) => ({
    loadRecipe: builder.query({
      query: (recipeId) => `${recipeId}?key=${KEY}`,
    }),
    loadSearchResults: builder.query({
      query: (query) => `?search=${query}&key=${KEY}`,
    }),
    uploadRecipe: builder.mutation({
      query: (uploadData) => ({
        url: `?key=${KEY}`,
        headers: {
          "Content-Type": "application/json",
        },
        body: uploadData, // The data that you want to send (should be a JSON object)
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoadRecipeQuery,
  useLoadSearchResultsQuery,
  useUploadRecipeMutation,
} = recipesApi;
export { recipesApi };
