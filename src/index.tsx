import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GlobalStyle } from "themes/GlobalStyle";
import { ThemeProvider } from "themes/ThemeProvider";
import { theme } from "themes/theme";
import "config/chart";

/* AOS CSS animation */
import AOS from 'aos';
import 'aos/dist/aos.css';

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

AOS.init();

root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
        </ThemeProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
