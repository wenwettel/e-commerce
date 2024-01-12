import './App.css';
import Navbar from './components/Navbar/Navbar';
import Counter from './components/Counter/Counter';
import Button from './components/Button/Button';
import AppsIcon from '@mui/icons-material/Apps';
import { useState } from 'react';

function App() {
  //Estado para mostrar el contador
  const [isShow, setIsShow] = useState(false);
  const handleClick = () => {
    setIsShow(!isShow);
  };
  return (
    <>
      <Navbar />
      {/* Contador con renderizado condicional  */}
      {isShow && <Counter />}
      <Button handleClick={handleClick}>
        Contador
        <AppsIcon />
      </Button>
    </>
  );
}

export default App;
