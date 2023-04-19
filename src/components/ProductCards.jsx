import React from 'react'
import bluearcimg from '../images/blue_arc_logo.jpg';
import { useNavigate } from 'react-router-dom';
import { Box, Grid, Typography, Button, Card, CardActionArea, CardMedia, CardContent } from '@mui/material';
import { styled } from '@mui/material/styles';
import {products} from '../products.js';

const ProductCards = () => {
  let navigate = useNavigate();

  const ProductCard = styled(Card)(({ theme }) => ({
    borderRadius: theme.spacing(2),
    transition: 'transform 0.15s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  }));

  const ProductCardMedia = styled(CardMedia)(({ theme }) => ({
    paddingTop: '100%',
    backgroundSize: 'contain',
  }));

  const ProductCardContent = styled(CardContent)(({ theme }) => ({
    textAlign: 'center',
    paddingBottom: theme.spacing(2),
  }));

  const ProductCardTitle = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
  }));

  const ProductCardDescription = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
  }));

  const ProductCardPrice = styled(Typography)(({ theme }) => ({
    fontWeight: 'bold',
    marginTop: theme.spacing(2),
  }));

  return (
    <>
      <Box py={10} >
        <Grid container spacing={4}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} key={product.id}>
              <ProductCard>
                <ProductCardMedia 
                  image={product.image} 
                />
                <ProductCardContent>
                  <ProductCardTitle variant="h6">
                    {product.name}
                  </ProductCardTitle>
                  <ProductCardDescription variant="body2">
                    {product.description}
                  </ProductCardDescription>
                  <ProductCardPrice variant="h5">
                    ${product.price}
                  </ProductCardPrice>
                  <Button variant="contained" sx={{ mt: 2 }}>
                    Add to cart
                  </Button>
                </ProductCardContent>
              </ProductCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  )
}

export default ProductCards