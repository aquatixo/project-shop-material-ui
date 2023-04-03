import React from 'react'
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'
import img4 from '../images/4.png'
import img6 from '../images/6.png'
import img10 from '../images/10.png'
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
      }
      ,{
          name: "Random Name #2"
          ,description: "Hello World!"
          ,img : img6
      }
      ,{
        name: "Random Name #3"
        ,description: "Aqua God!"
        ,img : img10
      }

  ]
  
  return (
    <div>
      <MyCarousel items={items} />
      
    </div>
  )
}

function MyCarousel(props){
  return (
    <Carousel 
      animation='fade'
      // IndicatorIcon={<Home/>}
      // navButtonsAlwaysVisible='true'
      indicatorIconButtonProps={{
        style: {
            // padding: '0px',    // 1
            //color: 'blue'       // 3
        }
      }}

      activeIndicatorIconButtonProps={{
        style: {
            backgroundColor: 'blue' // 2
        }
      }}

      indicatorContainerProps={{
        style: {
            marginTop: '0px', // 5
            textAlign: 'center' // left center right
        }

      }}

      next={ () => {console.log('next')} }
      prev={ () => {console.log('prev')} }
      // NextIcon={<img src={img4}/>}
      // PrevIcon={<img src="http://random.com/prev"/>}
    >
      {
        props.items.map( (item, i) => <Item key={i} item={item} /> )
      }
    </Carousel>
  )
}

function Item(props)
{
    return (
      <Paper sx={{ boxShadow: 0 }}>
          <div style={{display:'flex'
            , justifyContent:"center"
            , alignItems: "center"
          }}>
            <img 
              src={props.item.img} 
              style={{
                // width:'100%',
                height: '50vh'
              }}
            />

            <div style={{
                position:'absolute'
                ,bottom:0
                ,backgroundColor:'white'
                ,opacity: 0.7
                ,padding:'10px'
                ,borderRadius: '30px'
              }}
            >
              <h2 style={{}}>{props.item.name}</h2>
              <p>{props.item.description}</p>
            </div>
          </div>

          
          {/* <Button className="CheckButton">
              Check it out!
          </Button> */}
      </Paper>
    )
}

export default HomeCarousel