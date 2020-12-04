import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import GameProvider from "./context/gameContext";
import {BrowserRouter} from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <GameProvider>
                <App/>
            </GameProvider>
        </BrowserRouter>
    </React.StrictMode>,
    rootElement
);
