import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Dropdown, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [producte, setProducte] = useState([]);
  let { id } = useParams();
  const getProductDetail = async () => {
    //'https://my-json-server.typicode.com/Yunho7058/noona_Shop'
    //'http://localhost:4000/products';
    let url = `https://my-json-server.typicode.com/Yunho7058/noona_Shop/products/${id}`;
    let res = await fetch(url);
    let data = await res.json();
    setProducte(data);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container className="product-container">
      <Row className="product-row">
        <Col className="product-img">
          <img src={producte?.img} />
        </Col>
        <Col>
          <div>{producte?.title}</div>
          <div>{producte?.price}</div>
          <div>{producte?.choice ? 'Conscious choice' : ''}</div>
          <div>{producte?.new ? 'NEW' : ''}</div>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              사이즈
            </Dropdown.Toggle>
            <Dropdown.Menu>
              {producte?.size?.map((el, idx) => {
                return (
                  <Dropdown.Item href={`#/action-${idx + 1}`} key={idx}>
                    {el}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
          </Dropdown>
          <Col>
            <Button variant="primary">구입하기</Button>
          </Col>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
