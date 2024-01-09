import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartWidget.css';

function CarWidget({ number, handleClick }) {
  return (
    <div className="containerCart">
      <ShoppingCartIcon
        className="cartIcon"
        onClick={(event) => {
          handleClick(event);
        }}
      />
      <span className="cartNumber">{number}</span>
    </div>
  );
}

export default CarWidget;
