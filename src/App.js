import { Box, GridList, GridListTile, GridListTileBar, IconButton } from '@material-ui/core';
import 'bootstrap/dist/css/bootstrap.min.css';
import StarBorderOutlinedIcon from '@material-ui/icons/StarBorderOutlined';
import a from './images/a.jpg';
import b from './images/b.jpg';
import c from './images/c.jpg';
import d from './images/d.jpg';
import e from './images/e.jpg';
import f from './images/red.jpg';
import g from './images/white.jpg';
import h from './images/yellow.jpg';
import i from './images/roses.jpg';





function App() {

  const verticalImages = [
    {
      image : a,
      caption: 'Dark Forest',
      cols: 4
    },

    {
      image : b,
      caption: 'Creek',
      cols: 2
    },

    {
      image : c,
      caption: 'Web Development',
      cols: 2
    },

    {
      image : d,
      caption: 'Mountains',
      cols: 4
    },

    {
      image : e,
      caption: 'Moonlight Night',
      cols: 2
    },

    {
      image : f,
      caption: 'Red Flowers',
      cols: 2
    },

    {
      image : g,
      caption: 'White Tulips',
      cols: 4
    },

    {
      image : h,
      caption: 'Yellow Flowers',
      cols: 2
    },

    {
      image : i,
      caption: 'Pink Roses',
      cols: 2
    }
  ]

  const horizontalImages = [
    {
      image : a,
      caption: 'Dark Forest',
      title:'Silent by night',
      cols: 2
    },

    {
      image : f,
      caption: 'Red Flowers',
      title:'Colorful by day',
      cols: 1
    },

    {
      image : c,
      caption: 'Web Development',
      title:'Silent by night',
      cols: 1
    },

    {
      image : g,
      caption: 'White Tulips',
      title:'Colorful by day',
      cols: 1
    },

    {
      image : e,
      caption: 'Moonlight Night',
      title:'Silent by night',
      cols: 4
    },

    {
      image : h,
      caption: 'Yellow Flowers',
      title:'Colorful by day',
      cols: 2
    },

    {
      image : d,
      caption: 'Snowy Mountains',
      title:'Silent by night',
      cols: 4
    },

    {
      image : i,
      caption: 'Pink Roses',
      title:'Colorful by day',
      cols: 2
    },

    {
      image : b,
      caption: 'Creek',
      title:'Silent by night',
      cols: 2
    }
  ]


  return (
    <>
    <Box mx={20}>
        <h2>Home</h2>

        <GridList cols={4} cellHeight={400} style={{height: "600px", width: "70%"}}>
          {verticalImages.map ((val) => (

              <GridListTile cols={val.cols}>
                    <img src={val.image} alt={val.caption}/>
                    <GridListTileBar 
                      title={val.caption}
                      actionIcon={<IconButton><StarBorderOutlinedIcon style={{color: "white"}}/></IconButton>}/>
              </GridListTile>

           )
          )}
          
        </GridList>
      </Box>


      <Box mx={20} my={5}>
        <GridList cols={4} cellHeight={300} style={{flexWrap:"nowrap"}}>
          {horizontalImages.map ((val) => (

              <GridListTile cols={val.cols}>
                    <img src={val.image} alt={val.caption}/>
                    <GridListTileBar 
                      title={val.caption}
                      subtitle={val.title}
                      actionIcon={<IconButton><StarBorderOutlinedIcon style={{color: "yellow"}}/></IconButton>}
                      actionPosition={"left"}
                      titlePosition={"top"}/>
              </GridListTile>

           )
          )}
          
        </GridList>
    </Box>
</>
  )
}

export default App;
