import './App.css';
import { useGlobalContext } from './Context';
import Favourites from './components/Favourites';
import Meals from './components/Meals';
import Modals from './components/Modals';
import Search from './components/Search';


function App() {
  const {showModal, favorites} = useGlobalContext();
  return (
  <div>
    <Search/>
    {favorites.length>0 && <Favourites/>}
    <Meals/>
    {showModal && <Modals/>}
  </div>
  )
}

export default App;
