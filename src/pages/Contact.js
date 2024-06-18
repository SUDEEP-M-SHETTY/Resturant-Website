import React from 'react'
import Layout from '../components/Layout/Layout';
import { Box, TableCell, TableContainer, TableHead, Typography,Table,TableRow,Paper, TableBody } from '@mui/material';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box sx={{
        my:5, ml:10,"& h4":{
          fontWeight:'bold',mb:2
        }
      }}>
        <Typography variant='h4'>
          Contact My Resturant
        </Typography>
        <p>
        Food webs are limited representations of real ecosystems as they necessarily aggregate many species into trophic species, which are functional groups of species that have the same predators and prey in a food web. Ecologists use these simplifications in quantitative (or mathematical representation) models of trophic or consumer-resource systems dynamics. Using these models they can measure and test for generalized patterns in the structure of real food web networks.
        </p>
      </Box>
      <Box sx={{m:3, width:"600px",ml:10,"@media (max-width:600px)":{
        width:'300px',
      },
      }}>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell sx={{bgcolor:'black', color:'white',}}align='center'>Contact Details</TableCell>
              </TableRow>
              
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon sx={{bgcolor:'red',pt:1}}/>1800-000-000 (tollfree)
                </TableCell>
                
                  
                </TableRow>
                <TableRow>
                <TableCell>
                  <EmailIcon sx={{bgcolor:'skyblue',pt:1}}/>help@myrest.com
                </TableCell>
                
                  
                </TableRow>
                <TableRow>
                <TableCell>
                  <CallIcon sx={{bgcolor:'green',pt:1}}/>1234567890
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