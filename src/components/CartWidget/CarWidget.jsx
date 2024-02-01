import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidget.css';
import CartContext from '../../context/CartConext';
import { useContext } from 'react';
import { sumaQuantities } from '../../utils/sumQuantitiesCart';
//import ListProductCart from '../ListProductsCart/ListProductsCart';

function CarWidget({ number, clickEnCarrito, isShowModal }) {
  const { itemsCart } = useContext(CartContext);
  return (
    <div className="containerCart">
      <ShoppingCartIcon className="cartIcon" />
      <span className="cartNumber">{sumaQuantities(itemsCart)}</span>
      {/* {isShowModal && <ListProductCart />} */}
    </div>
  );
}

export default CarWidget;
