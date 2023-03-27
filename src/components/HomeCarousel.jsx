import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import img4 from '../images/4.png'
import img6 from '../images/6.png'
import Home from '@mui/icons-material/Home';

const paperStyle = {
  // height : "500px"
}

const HomeCarousel = () => {
  var items = [
      {
          name: "Random Name #1"
          ,description: "Probably the most random thing you have ever seen!"
          ,img : img4
      },
      {
          name: "Random Name #2"
          ,description: "Hello World!"
          ,img : img6
      }
  ]
  
  return (
    <div>
      <Carousel 
        animation='slide'
      >
        {
          items.map( (item, i) => <Item key={i} item={item} /> )
        }
      </Carousel>

    </div>
  )
}

function Item(props)
{
    return (
      <Paper style={paperStyle} >
          <h2>{props.item.name}</h2>
          {/* <p>{props.item.description}</p> */}
          {/* <img src={props.item.img} className="center-fit center"/> */}
          {/* <Button className="CheckButton">
              Check it out!
          </Button> */}
      </Paper>
    )
}

export default HomeCarousel