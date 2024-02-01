import './App.css';
import { AppProvider } from './AppProvider';
import Header from './components/Header';
import Articles from './components/Articles';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <Header />
        <Articles />
      </div>
    </AppProvider>
  );
}



export default App;
