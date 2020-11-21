import React, { useState, useEffect } from 'react';
import Ratings from '../components/Ratings';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  return (
    <Card className="rounded my-3 p-3">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top"></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Ratings
          value={product.rating}
          text={`${product.numReviews} avaliações`}
          color="gold"
        ></Ratings>
      </Card.Body>
    </Card>
  );
};

export default Product;
