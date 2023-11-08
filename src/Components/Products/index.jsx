import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { addToCartAndUpdateInventory } from '../../store/cart';

const Products = () => {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    if (product.inventoryCount > 0) {
      dispatch(addToCartAndUpdateInventory(product));
    }
  };
  
  const products = useSelector((state) => state.products.list);
  const activeCategory = useSelector((state) => state.categories.activeCategory);

  const filteredProducts = products.filter((product) => product.category === activeCategory);

  return (
    <Grid container spacing={2} justifyContent="center">
      {filteredProducts.length ? filteredProducts.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.name}>
          <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {product.name}
              </Typography>
              <Typography>
              {product.description}
              </Typography>
              <Typography>
              Price: $
              {product.price}
              </Typography>
              <Typography>
              Inventory: (
              {product.inventoryCount})
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">View Details</Button>
              <Button size="small" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </CardActions>
          </Card>
        </Grid>
      )) : (
        <Typography variant="h5">Please select category</Typography>
      )}
    </Grid>
  );
};

export default Products;


