import './navBarStyled.css';
import CarWidget from '../CartWidget/CarWidget';
import Logo from '../../assets/img/logo.jpg';
import { useState } from 'react';

function Navbar() {
  const [section, setSection] = useState('Inicio');
  const [isShowModal, setIsShowModal] = useState(false);

  const clickEnCarrito = (seccion) => {
    setSection(seccion);
    setIsShowModal(true);
  };

  return (
    <nav className="navBar">
      <div className="container-logo">
        <img
          src={Logo}
          alt="logo"
          className="logo"
          onClick={() => clickEnCarrito('Inicio')}
        />
        <span>
          <b>{section}</b>
        </span>
      </div>
      <ul className="categoryList">
        <li>
          <a href="#">Cosmetica</a>
        </li>
        <li>
          <a href="#">Clases</a>
        </li>
        <li>
          <a href="#">Elementos</a>
        </li>
        <li>
          <a href="#">Contacto</a>
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
