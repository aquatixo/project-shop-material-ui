import { Grid, Paper, Typography, Button } from '@material-ui/core';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(4),
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  detailsContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  price: {
    color: theme.palette.secondary.main,
    marginBottom: theme.spacing(2),
    textAlign: 'center',
  },
  description: {
    marginBottom: theme.spacing(2),
    textAlign: 'justify',
    lineHeight: '1.5em',
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  icon: {
    marginRight: theme.spacing(1),
  },
}));

const Product = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src="https://picsum.photos/500/500"
            alt="Product Image"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <div className={classes.detailsContainer}>
            <Typography variant="h4" gutterBottom className={classes.title}>
              Product Title
            </Typography>
            <Typography variant="h6" gutterBottom className={classes.price}>
              $49.99
            </Typography>
            <Typography variant="body1" gutterBottom className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae turpis a nulla
              sollicitudin bibendum vel a odio. Vestibulum ante ipsum primis in faucibus orci luctus
              et ultrices posuere cubilia curae; Donec eleifend posuere enim quis viverra. Nullam
              dapibus tempus elit id blandit.
            </Typography>
            <Button variant="contained" className={classes.button} startIcon={<AddShoppingCartIcon className={classes.icon} />}>
              Add to Cart
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Product