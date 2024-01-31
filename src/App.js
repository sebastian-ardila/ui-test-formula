import './App.css';
import { AppProvider } from './AppProvider';
import Header from './components/Header';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
      </div>
    </AppProvider>
  );
}



export default App;
