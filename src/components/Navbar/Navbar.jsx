import './navBarStyled.css';
import CarWidget from '../CartWidget/CarWidget';

function Navbar() {
  const handleClick = (event) => {
    console.log(event);
  };

  return (
    <div className="navBar">
      <h1>Wwettel</h1>
      <CarWidget number={3} handleClick={handleClick} />
    </div>
  );
}

export default Navbar;
