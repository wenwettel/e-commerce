import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidget.css';

function CarWidget({ number, clickEnCarrito, isShowModal }) {
  return (
    <div className="containerCart">
      <ShoppingCartIcon
        className="cartIcon"
        onClick={() => clickEnCarrito('Carrito')}
      />
      <span className="cartNumber">{number}</span>
      {/* {isShowModal && <Modal />} */}
    </div>
  );
}

export default CarWidget;
