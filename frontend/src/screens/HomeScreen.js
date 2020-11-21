import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import axios from 'axios';
// import products from '../../../backend/data/products';

const HomeScreen = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products');
      setProduct(res.data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Últimos Lançamentos</h1>
      <Row>
        {products.map((p) => (
          <Col key={p._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={p}></Product>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeScreen;
