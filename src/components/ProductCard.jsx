import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ item }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/product/${item.id}`);
  };
  return (
    <div className="card" onClick={showDetail}>
      <img src={item?.img} width={200} />
      <div>{item?.new ? 'Conscious choice' : <div>&nbsp;</div>}</div>
      <div>{item?.title}</div>
      <div>{item?.price}</div>
      <div>{item?.new ? '신제품' : <div>&nbsp;</div>}</div>
    </div>
  );
};

export default ProductCard;
