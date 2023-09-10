import React from "react";
import { createRoot } from "react-dom/client";
import App from "./src/App";
import store from "./src/redux/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root")
if (container) {
    const root = createRoot(container);
    root.render(
        <Provider store={store} >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}
