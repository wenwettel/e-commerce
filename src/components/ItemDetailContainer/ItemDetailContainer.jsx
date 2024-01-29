import React from 'react';
import { getProductById } from '../../serverMock/productMock';
import { useEffect, useState } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import './styles.css';
import { useParams } from 'react-router-dom';
import Spinner from '../commons/Spinner/Spinner';

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [productDetail, setProductDetail] = useState({
    data: null,
    loading: false,
    error: false,
  });

  useEffect(() => {
    setProductDetail({ loading: true });
    getProductById(itemId)
      .then((res) => setProductDetail({ data: res, loading: false }))
      .catch((error) => {
        console.error(error);
        setProductDetail({ error: true, loading: false });
      });
  }, [itemId]);

  if (productDetail.loading)
    return <Spinner isLoading={productDetail.loading} />;

  if (productDetail.error)
    return <h1>¡Ha ocurrido un error, intentelo nuevamente!</h1>;

  return (
    <div className="containerDetail">
      {productDetail.data && <ItemDetail {...productDetail.data} />}
    </div>
  );
}

export default ItemDetailContainer;
