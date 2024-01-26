import React from 'react';
import { getProductById } from '../../serverMock/productMock';
import { useEffect, useState } from 'react';
import Item from '../Item/Item';
import './styles.css';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [productDetail, setProductDetail] = useState(null);

  useEffect(() => {
    getProductById(itemId).then((res) => setProductDetail(res));
  }, [itemId]);

  return (
    <div className="containerDetail">
      {productDetail && <Item {...productDetail} />}
    </div>
  );
}

export default ItemDetailContainer;
