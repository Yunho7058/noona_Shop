import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  const [productlist, setProductlist] = useState([]);
  const [query, setQuery] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get('q') || '';
    //'https://my-json-server.typicode.com/Yunho7058/noona_Shop'
    //'http://localhost:4000/products';
    let url = `https://my-json-server.typicode.com/Yunho7058/noona_Shop/products?q=${searchQuery}`;
    let res = await fetch(url);
    let data = await res.json();
    setProductlist(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <div>
      <Container>
        <Row>
          {productlist.map((menu, idx) => {
            return (
              <Col key={idx} lg={3}>
                <ProductCard item={menu} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
