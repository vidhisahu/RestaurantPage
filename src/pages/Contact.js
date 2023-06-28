import React from 'react'
import Layout from '../components/Layout';
import { Box, Table, TableCell, TableRow, Typography ,Paper,TableContainer,TableHead,TableBody} from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
const Contact = () => {
  return (
    <Layout>
        <Box sx={{ my: 5,ml:10,"& h4":{fontWeight:"bold",mb:2}}}>
          <Typography variant="h4">
            Contact My Restaurant
          </Typography>
          <p>
             You can contact our restaurant in following details for pre-booking or for any information or queies.
          </p>
        </Box>
        <Box sx={{ m:3,width:"600px",ml:10 ,"@media (max-width:600px)":{width:"300px"},}} >
          <TableContainer component={Paper}>
            <Table aria-label= "contact table">
            <TableHead>
              <TableRow>
              <TableCell sx={{ bgcolor:"black",color:"white"}} align="center">
              Contact Details
              </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <MailIcon sx={{ color: "red",pt:1}}/> help@gmail.com
                </TableCell>
              </TableRow>
              <TableRow>
              <TableCell>
                  <PhoneIcon sx={{ color:"green",pt:1}}/> 1234567890
                </TableCell>
              </TableRow>
            </TableBody>
            </Table>
          </TableContainer>
        </Box>
    </Layout>
  );
};

export default Contact;