import logo from "./logo.svg";
import "./App.css";
import ThemeSwitcher from "./ThemeSwitcher";
import LanguageSelector from "./LanguageSelector";
import { ThemeProvider } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <LanguageProvider>
          <ThemeProvider>
            <div>
              <h1>Language Selector React App</h1>
              <ThemeSwitcher />
              <LanguageSelector />
            </div>
          </ThemeProvider>
        </LanguageProvider>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
