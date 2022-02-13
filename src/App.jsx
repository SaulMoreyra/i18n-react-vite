import logo from "./logo.svg";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  // kyePrefix "home" scope
  const { t, i18n } = useTranslation("translation", { keyPrefix: "home" });
  console.log(i18n);

  const changeLanguage = (language) => i18n.changeLanguage(language);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <h2>{t("welcome")}</h2>
        <h2>{t("smallText")}</h2>
        <p>
          <button onClick={() => changeLanguage("es")}>es</button>
          <button onClick={() => changeLanguage("en")}>en</button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
