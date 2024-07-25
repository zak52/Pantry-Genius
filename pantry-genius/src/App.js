import './App.css';
import LoginPage from './Pages/LoginPage';
import PantryPage from './Pages/PantryPage';
import NavigationBar from './Components/Navigation-Bar';
import RecipePage from './Pages/RecipePage';

function App() {
  return (
    <div className="App">
      <div className='content'>
          <RecipePage/>
          <NavigationBar />
      </div>
      
    </div>
  );
}

export default App;
