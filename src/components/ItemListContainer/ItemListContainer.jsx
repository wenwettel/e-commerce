import './styled.css';
import { useEffect, useState } from 'react';
import { getProducts } from '../../serverMock/productMock';

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    /*getProducts()
      .then((res) => setItems(res))
      .catch((err) => console.log(err.message));*/

    const fetchProducts = async () => {
      try {
        const res = await getProducts();
        setItems(res);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1 className="title">{greeting}</h1>
      <div className="listItems">
        {items.map((item) => {
          const { img, name, id, price, category, description } = item;
          return (
            <div key={id} className="item">
              <img src={img} alt={name} />
              <h3>{name}</h3>
              <p>{description}</p>
              <p>{category}</p>
              <p>{price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ItemListContainer;
