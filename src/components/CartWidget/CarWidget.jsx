import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidget.css';
//import ListProductCart from '../ListProductsCart/ListProductsCart';

function CarWidget({ number, clickEnCarrito, isShowModal }) {
  return (
    <div className="containerCart">
      <ShoppingCartIcon
        className="cartIcon"
        onClick={() => clickEnCarrito('Carrito')}
      />
      <span className="cartNumber">{number}</span>
      {/* {isShowModal && <ListProductCart />} */}
    </div>
  );
}

export default CarWidget;
