import React from 'react';
import Layout from '../components/Layout';
import { MenuList } from "../data/data";
import {Box, CardMedia,CardActionArea,Card, Typography,CardContent} from '@mui/material';

const Menu = () => {
  return (
    <Layout>
        <Box sx={{ display: "flex" , flexWrap:"wrap", justifyContent:"center"}}>
            {
              MenuList.map(menu => (
                <Card  sx={{maxWidth: "350px" , dispaly: "flex" , margin:2 }}>
                  <CardActionArea>
                    <CardMedia sx={{minHeight:'400px'}} component={'img'} src={menu.image} alt={menu.name}/>
                    <CardContent>
                      <Typography variant="h5" gutterBottom component={"div"}>
                      {menu.name}
                      </Typography>
                      <Typography variant="h6" gutterBottom component={"div"}>
                      {menu.price}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              ))
            }
        </Box>
    </Layout>
  )
}

export default Menu