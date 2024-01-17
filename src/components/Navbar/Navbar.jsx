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
    <div className="navBar">
      <div className="container-logo">
        <img
          src={Logo}
          alt="logo"
          className="logo"
          onClick={() => clickEnCarrito('Inicio')}
        />
        <span>
          Usted esta en: <b>{section}</b>
        </span>
      </div>
      <CarWidget
        number={3}
        clickEnCarrito={clickEnCarrito}
        isShowModal={isShowModal}
      />
    </div>
  );
}

export default Navbar;
