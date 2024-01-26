import './navBarStyled.css';
import CarWidget from '../CartWidget/CarWidget';
import Logo from '../../assets/img/logo.jpg';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [isShowModal, setIsShowModal] = useState(false);

  const clickEnCarrito = () => {
    setIsShowModal(true);
  };

  return (
    <nav className="navBar">
      <div className="container-logo">
        <Link to="/">
          <img src={Logo} alt="logo" className="logo" />
        </Link>
      </div>
      <ul className="categoryList">
        <li>
          <NavLink to="/category/cosmetic">Cosmetica</NavLink>
        </li>
        <li>
          <NavLink to="/category/class">Clases</NavLink>
        </li>
        <li>
          <NavLink to="/category/elements">Elementos</NavLink>
        </li>
        <li>
          <NavLink to="/Contactos">Contactos</NavLink>
        </li>
      </ul>
      <CarWidget
        number={3}
        clickEnCarrito={clickEnCarrito}
        isShowModal={isShowModal}
      />
    </nav>
  );
}

export default Navbar;
