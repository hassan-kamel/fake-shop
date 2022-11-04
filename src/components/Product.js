import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/features/cart-slice';

const Product = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <Card
      style={{
        minWidth: '15rem',
        height: '100%',
        padding: '10px',
        textAlign: 'center',
      }}>
      <Card.Img
        style={{ height: '10rem', objectFit: 'contain' }}
        variant='top'
        src={product.image}
      />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        {/* <Card.Text>{product.description}</Card.Text> */}
        <Button
          variant='primary'
          onClick={() => {
            dispatch(addToCart(product));
          }}>
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Product;
