// Importing the necessary CSS and components
import './App.css';
import LanguageProvider from './components/LanguageProvider';
import LanguageSelector from './components/LanguageSelector';
import ThemeProvider from './components/ThemeProvider';
import ThemeSelector from './components/ThemeSelector';

// App Component - serves as the root of the application
function App() {
  // Wrapping LanguageSelector and ThemeSelector inside their respective Providers
  // This allows these selectors to access the language and theme context
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

// Making App component available for import
export default App;
