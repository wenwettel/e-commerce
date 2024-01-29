import './styles.css';
import ItemCount from '../ItemCount/ItemCount';
import { useState } from 'react';
import Button from '../commons/Button/Button';
import { Link } from 'react-router-dom';

function ItemDetail({ name, category, stock, img, description, id }) {
  const [itemAddCart, setItemAddCart] = useState(0);
  const onAdd = (quantity) => {
    setItemAddCart(quantity);
  };

  return (
    <div className="itemDetail" key={id}>
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>Descripcion: {description}</p>
      <p>stock: {stock} </p>
      <p>Categoria: {category}</p>
      <div className="actionCardDetail">
        {itemAddCart > 0 ? (
          <Link to="/cart">
            <Button>Terminar Compra</Button>
          </Link>
        ) : (
          <ItemCount onAdd={onAdd} />
        )}
      </div>
    </div>
  );
}

export default ItemDetail;
