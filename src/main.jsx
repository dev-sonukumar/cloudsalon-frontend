import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "./context/AppContext.jsx";
import ShopContextProvider from "./context/ShopContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AppContextProvider>
      {" "}
      {/* Provides global app data, auth, cart, etc. */}
      <ShopContextProvider>
        {" "}
        {/* Provides shop-specific data or logic */}
        <App />
      </ShopContextProvider>
    </AppContextProvider>
  </BrowserRouter>
);
