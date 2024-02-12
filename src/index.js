import React, { StrictMode } from "react"; // React
import { createRoot } from "react-dom/client"; //React’s library to talk to web browsers (React DOM)
import "./styles.css"; // Styles

import App from "./App"; // The App compoment

// The remainder of the file brings all the pieces together and injects the final product into index.html in the public folder:
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);