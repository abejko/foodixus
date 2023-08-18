import SearchResults from "./pages/SearchResults";
import { Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RecipeDetails from "./components/Recipe-Details/RecipeDetails";

import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import LoginProviders from "./components/Login/LoginProviders";
import LoginForm from "./components/Login/LoginForm";
import SignupProviders from "./components/Login/SignupProviders";
import ForgotPassword from "./components/Login/ForgotPassword";
import SignupForm from "./components/Login/SignupForm";
import SignupConfirmation from "./components/Login/SignupConfirmation";
import SavedRecipes from "./components/SavedRecipes";
import CreatedRecipes from "./components/Created-Recipe/CreatedRecipes";
import AddRecipe from "./components/Add-Recipe/AddRecipe";
import CreatedRecipeDetails from "./components/Recipe-Details/CreatedRecipeDetails";
import UserAccount from "./components/Account/UserAccount";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname.startsWith("/login");
  return (
    <>
      <main>
        {!isLoginPage && <Header />}

        <Routes>
          <Route to="/" element={<Home />} />
          <Route path="search" element={<SearchResults />} />
          <Route path=":id" element={<RecipeDetails />} />
          <Route
            path="created-recipes/:id"
            element={<CreatedRecipeDetails />}
          />
          <Route path="login/:view?" element={<Login />}>
            <Route index element={<LoginProviders />} />
            <Route path="login-form" element={<LoginForm />} />
            <Route path="signup-providers" element={<SignupProviders />} />
            <Route path="signup-form" element={<SignupForm />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route
              path="signup-confirmation"
              element={<SignupConfirmation />}
            />
          </Route>

          <Route path="dashboard/*" element={<Dashboard />}>
            <Route path="saved-recipes" element={<SavedRecipes />} />
            <Route path="created-recipes" element={<CreatedRecipes />} />
            <Route path="account" element={<UserAccount />} />
          </Route>
          <Route path="add-recipe" element={<AddRecipe />} />
        </Routes>
      </main>

      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;
