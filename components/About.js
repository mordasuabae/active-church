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
  background:'rgb(68,68,94)',
  padding:'65px 100px',
  textAlign: 'center',
  color:'white',
  height:'95vh',
  margin:'0 0 0 0',
  opacity:'0.9',
  boxShadow:'1px 1px #44445e'
  // opacity:'0.7'
}));
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      '& > :not(style)': {
        
        padding:'0 75px',
        height: 128,
        flexGrow: 1,
        
      },
    }} className='aboutus' >
        {/* <Box style={{height:'100vh',}} >
  
        </Box> */}
        <Grid container spacing={2}>
        <Grid  item xs={12}>
        <Box sx={{borderBottom:'5px wheat solid',width:'100%',}}></Box>
            
        <Item>
         
          <Box className='typeText' sx={{color:'white',display:'flex',justifyContent:'center',fontSize:'40px',alignItems:'center',}}>
           

            <Typography className='typeText' sx={{color:'#FF1493',fontSize:'40px',}}>A</Typography>bout Us
          
            
            </Box>
            <Box sx={{display:'flex',padding:'30px 0'}}>
                
             
              <Box sx={{padding:'0 80px'}}>
                <Typography sx={{margin:'60px 0 0 0',textAlign:'justify',}}>
                <Link className='link' style={{color:'wheat'}} href='/'><b>Lorem ipsum</b></Link> dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus 
                  </Typography>
              <Typography sx={{margin:'60px 0 0 0',textAlign:'justify'}} ><Link className='link' style={{color:'wheat'}} href='/'><b>Rerum</b></Link> sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</Typography>
              <Typography sx={{margin:'50px 0 0 65%',justifyContent:'flex-end'}}><Link className='link' style={{color:'wheat'}} href='/'><b>More Info </b>&rarr; </Link> </Typography>
              <Box className='layer' sx={{margin:'-60px 0 0 -75px',width:'130px',height:'130px',backgroundImage:`url('/Flowers.png')`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                </Box>
              </Box>
                
            
              
              <Box sx={{padding:'0 80px'}}>
                <Typography sx={{margin:'60px 0 0 0',textAlign:'justify'}} >
                <Link className='link' style={{color:'wheat'}} href='/'><b>Lorem ipsum</b></Link>  dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus 
                </Typography>
                <Typography sx={{margin:'60px 0 0 0',textAlign:'justify'}}><Link className='link' style={{color:'wheat'}} href='/'><b>Rerum</b></Link> sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!</Typography>
                <Box sx={{margin:'-550px 0 0 115%',width:'145px',height:'130px',backgroundImage:`url('/Flower.png')`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
                </Box>
                <img src='/Tree 1.png'/>
                <img src='/Tree 1.png'/>
                
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