import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
// import './index.css'
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18next
	.use(HttpApi)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		supportedLngs: ["ar", "en"],
		fallbackLng: "en",
		debug: true,
		// Options for language detector
		detection: {
			order: ["path", "cookie", "htmlTag"],
			caches: ["cookie"],
		},
		// react: { useSuspense: false },
		backend: {
			// loadPath: "/assets/locales/{{lng}}/translation.json",
			loadPath: "/public/assets/locales/{{lng}}/translation.json",
		},
	});
ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
