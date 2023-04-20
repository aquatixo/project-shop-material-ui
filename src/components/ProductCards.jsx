import { Box ,Container, Grid, Card, CardActionArea, CardMedia, CardContent, Typography, Button, makeStyles } from '@material-ui/core';
import { products } from '../products.js';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import Title from './Title.jsx';

const useStyles = makeStyles((theme) => ({
  container: {
    maxWidth: 1080,
  },
  card: {
    position: 'relative',
    '&:hover $addBtn': {
      transform: 'translateY(0)',
    },
    '&:hover $media': {
      transform: 'scale(1.1)',
    },
  },
  media: {
    height: 200,
    transition: 'transform 0.3s ease-out',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(2),
  },
  addBtn: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    transform: 'translateY(100%)',
    transition: 'transform 0.3s ease-out',
  },
}));

const ProductCards = () => {
  let navigate = useNavigate();
  const classes = useStyles();

  return (
    <>
      <Title title='Products'/>
      <Container className={classes.container}>
        <Grid container spacing={3}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
              <Card className={classes.card}>
                <CardActionArea onClick={()=>{navigate('/product')}}>
                  <CardMedia
                    className={classes.media}
                    image={product.image}
                    title={product.title}
                  />
                  <CardContent className={classes.content}>
                    <Typography variant="h6">{product.name}</Typography>
                    <Typography variant="body1">${product.price}</Typography>
                  </CardContent>
                </CardActionArea>
                <Button className={classes.addBtn} variant="contained" color="primary"
                  onClick={()=>{alert('add')}}
                >
                  <AddIcon />
                </Button>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}

export default ProductCards