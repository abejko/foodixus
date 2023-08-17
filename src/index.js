import React from "react";
import ReactDom from "react-dom/client";
import App from "./App";
import "./sass/main.scss";
import { BrowserRouter } from "react-router-dom";
import { store } from "./store";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "react-query";
import { ActiveTabProvider } from "./context/ActiveTabContext";

const queryClient = new QueryClient();

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Provider store={store}>
        <ActiveTabProvider>
          <React.StrictMode>
            <App />
          </React.StrictMode>
        </ActiveTabProvider>
      </Provider>
    </BrowserRouter>
  </QueryClientProvider>
);

// StringMode The only thing that it does is that during development it will render all components twice in order to find certain bugs. So strict mode is nothing groundbreaking but it's still a good idea to always activate it when we develop React applications.
