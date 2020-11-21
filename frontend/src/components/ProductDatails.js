import React from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import Ratings from "./Ratings";

const ProductDatails = ({ product }) => {
  return (
    <>
      <Card key={product._id}>
        <Card.Header>
          <Card.Title>{product.name}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col lg={8}>
              <img className="w-100" src={product.image} alt="..." />
            </Col>
            <Col lg={4}>
              <div>
                <p className="h5">Preço: {product.price}</p>
                <div className="h5">
                  <Ratings
                    value={product.rating}
                    text={`${product.numReviews} avaliações`}
                    color="gold"
                  ></Ratings>
                </div>
                <p className="h5">Marca: {product.brand}</p>
                <p className="h5">Categoria: {product.category}</p>
              </div>
              <Button variant="primary" disabled={product.countInStock === 0}>
                Comprar
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Card>
        <Card.Header>
          <Card.Title>Descrição</Card.Title>
        </Card.Header>
        <Card.Body>{product.description}</Card.Body>
      </Card>
    </>
  );
};

export default ProductDatails;
