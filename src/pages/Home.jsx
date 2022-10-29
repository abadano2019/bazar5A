import '../sass/App.scss';
import ItemListContainer from '../components/ItemListContainer';

export const Home = () => {
  return (
    <div className="App">
      <main className="content">
        <ItemListContainer />
      </main>
    </div>
  );
};
