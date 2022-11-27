import ItemListContainer from '../components/ItemListContainer';
import '../sass/App.scss';

export const Home = () => {
  return (
    <div className="App">
      <main className="content">
        <ItemListContainer />
      </main>
    </div>
  );
};
