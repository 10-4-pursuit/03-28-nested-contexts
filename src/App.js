
import './App.css';
import LanguageProvider from './components/LanguageProvider';
import LanguageSelector from './components/LanguageSelector';
import ThemeProvider from './components/ThemeProvider';
import ThemeSelector from './components/ThemeSelector';

function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <ThemeProvider>
          <LanguageSelector />
          <ThemeSelector />
        </ThemeProvider>
      </LanguageProvider>
    </div>
  );
}

export default App;
