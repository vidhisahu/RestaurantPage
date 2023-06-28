import React from 'react'
import Layout from '../components/Layout';
import { Box, Typography } from '@mui/material';
const About = () => {
  return (
    <Layout>
      <Box sx={{my:10,textAlign:"center",p:2,
      "& h4":{fontWeight: "bold",my:2,fontSize:"2rem"},
      "& p":{taetAlign: "justify"},}}> 
            <Typography variant="h4">
              Welcome to My Restaurant
            </Typography>
            <p>
                 Here in our Restaurant we serve best food. you can enjoy your food with good environment with some fun games.
                 we provide you the best services for your dine-in as well as for your take-away food orders.
            </p>
      </Box>
    </Layout>
  );
};

export default About;