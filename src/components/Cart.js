import React from 'react';
import { Badge, Button, Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeFromCart } from '../redux/features/cart-slice';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const totalPrice = cart.reduce((acc, item) => {
    return (acc += item.price * item.qty);
  }, 0);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>
        Total Price <Badge bg='info'>{totalPrice.toFixed(2)} $</Badge>
      </h2>
      <Button
        className='mb-5'
        variant='danger'
        onClick={() => {
          dispatch(clearCart());
        }}>
        Clear
      </Button>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>#</th>
            <th>Price</th>
            <th>Title</th>
            <th>Image</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.price}</td>
                <td>{item.title}</td>
                <td>
                  <img style={{ width: '5rem' }} src={item.image} alt='' />
                </td>
                <td>{item.qty}</td>
                <td>
                  <Button
                    variant='danger'
                    onClick={() => {
                      dispatch(removeFromCart(item));
                    }}>
                    Remove
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;
