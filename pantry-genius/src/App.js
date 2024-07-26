import './App.css';
import LoginPage from './Pages/LoginPage';
import PantryPage from './Pages/PantryPage';
import NavigationBar from './Components/Navigation-Bar';
import RecipePage from './Pages/RecipePage';
import ShoppingListPage from './Pages/ShoppingListPage';
import Swipeablelistitem from './Components/Swipeable-List-item';

function App() {
  return (
    <div className="App">
      <div className='content'>
        <ShoppingListPage/>
        <NavigationBar/>
      </div>
      
    </div>
  );
}

export default App;
