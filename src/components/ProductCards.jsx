import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import bluearcimg from '../images/blue_arc_logo.jpg';
import Grid from '@mui/material/Grid';
import { useNavigate } from 'react-router-dom';

const ProductCards = () => {
  let navigate = useNavigate();
  
  return (
    <>
      <Grid container spacing={2} style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
        {
        [1,2,3].map((anchor) => (
          
          <Card sx={{ maxWidth: 345 }} onClick={()=>{navigate('/product')}}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={bluearcimg}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))
        }
      </Grid>
    </>
  )
}

export default ProductCards