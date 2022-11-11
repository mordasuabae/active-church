import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Link from 'next/link'

function About() {
  
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor:'rgb(169,169,169)',
  // background: "#57595D",
  background:'rgba(0,0,0,0.6)',
  padding:'100px 100px',
  textAlign: 'center',
  color:'white',
  height:'119vh',
  margin:'-24px 0 0 0',
  // opacity:'0.7'
}));
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        
        padding:'0 70px',
        height: 128,
        flexGrow: 1,
        
      },
    }} className='aboutus' >
        {/* <Box style={{height:'100vh',}} >
  
        </Box> */}
        <Grid container spacing={2}>
        <Grid  item xs={12}>
        <Item>
          <Box sx={{color:'white',fontSize:'25px',display:'flex',textAlign:'center',justifyContent:'center'}}>
          
            <Typography className='typeText' sx={{color:'#FF1493',fontSize:'25px',fontStyle:'bold'}}>A</Typography>bout Us
            </Box>
            
            <Box sx={{display:'flex',padding:'50px 0'}}>
              <Box sx={{padding:'0 50px',}}>
                <Typography className='typeText' sx={{margin:'60px 0 0 0',textAlign:'left'}}>
                <Link className='link' style={{color:'wheat'}} href='/'>Lorem ipsum</Link> dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                  </Typography>
              <Typography sx={{margin:'60px 0 0 0',textAlign:'left'}} className='typeText'><Link className='link' style={{color:'wheat'}} href='/'>Rerum</Link> sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</Typography>
              <Typography sx={{margin:'10px 0 0 75%',justifyContent:'flex-end'}}><Link className='link' style={{color:'wheat'}} href='/'>More Info</Link> </Typography>
              <Box sx={{margin:'-42% 0 0 -116%'}}>
                 <img sx={{height:'25px',width:'50px',}} src='/Flowers.png'></img> 
                </Box>
              
              </Box>
              <Box sx={{padding:'0 50px'}}>
                <Typography sx={{margin:'60px 0 0 0',textAlign:'left'}} className='typeText'>
                <Link className='link' style={{color:'wheat'}} href='/'>Lorem ipsum</Link>  dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                </Typography>
                <Typography sx={{margin:'60px 0 0 0',textAlign:'left'}} className='typeText'><Link className='link' style={{color:'wheat'}} href='/'>Rerum</Link> sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</Typography>
                <Box sx={{margin:'-160% 0 0 70%'}}>
                 <img sx={{height:'25px',width:'50px',}} src='/Flower.png'></img> 
                </Box>
                
               </Box>
            </Box>
            

            </Item>
            {/* <Item>
            </Item> */}
{/*       
      <Paper elevation={3} />About us */}
        </Grid>
          {/* <Paper elevation={0} />
      <Paper />
      <Paper elevation={3} />   */}
        </Grid>
        
    </Box>
  )
}

export default About