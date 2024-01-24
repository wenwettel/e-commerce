import './App.css';
import Navbar from './components/Navbar/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/Counter/Counter';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={'¡Bienvenido, hora de comprar!'} />
      <Counter />
    </>
  );
}

export default App;
