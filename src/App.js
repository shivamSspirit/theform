import './App.css';
import Form from './components/form/form';
import ThemeProvider from './context/themecontext';


function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Form />
      </div>
    </ThemeProvider>
  );
}

export default App;
