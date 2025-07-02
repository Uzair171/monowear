import App from "./App.jsx";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { ProductsProvider } from "./context/productContext.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
