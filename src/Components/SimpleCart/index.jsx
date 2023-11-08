import React from 'react';
import { useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';

const SimpleCart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const itemCount = Object.values(cartItems).reduce((total, item) => total + item.quantity, 0);
  
    return (
      <Badge badgeContent={itemCount} color="secondary">
        <ShoppingCartIcon />
      </Badge>
    );
  };

export default SimpleCart;
