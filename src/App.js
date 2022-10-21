
import './sass/App.scss';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting= "Bienvenido a Bazar 5A" />
        <Footer />
    </div>
  );
}

export default App;
