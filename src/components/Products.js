import React, { useEffect } from 'react';
import { Col, Container, Row, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/features/products-slice';
import Product from './Product';

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  return (
    <Container>
      <Row>
        {!products ? (
          <Spinner animation='border' />
        ) : (
          products.map((product) => {
            return (
              <Col key={product.id} style={{ marginBottom: '5rem' }}>
                <Product product={product} />
              </Col>
            );
          })
        )}
      </Row>
    </Container>
  );
};

export default Products;
