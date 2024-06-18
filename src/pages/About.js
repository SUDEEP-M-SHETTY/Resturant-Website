import React from 'react'
import Layout from '../components/Layout/Layout';
import { Box, Typography } from '@mui/material';

const About = () => {
  return (
    <Layout>
      <Box sx={{
        my:15,
        textAlign:'center',
        p:2,
        "& h4":{
          fontWeight:"bold",
          my:2,
          fontSize:"2rem",
        },
        "& p":{
          textAlign:"justify",
        },
        "@media (max-width:600px)":{
          mt:0,
        },
      }}>
      <Typography variant="h4">
        Welcome to my Resturant
      </Typography>
      <p>
      A food web is the natural interconnection of food chains and a graphical representation of what-eats-what in an ecological community. Ecologists can broadly define all life forms as either autotrophs or heterotrophs, based on their trophic levels, the position that they occupy in the food web. To maintain their bodies, grow, develop, and to reproduce, autotrophs produce organic matter from inorganic substances, including both minerals and gases such as carbon dioxide. These chemical reactions require energy, which mainly comes from the Sun and largely by photosynthesis, although a very small amount comes from bioelectrogenesis in wetlands,[1] and mineral electron donors in hydrothermal vents and hot springs. These trophic levels are not binary, but form a gradient that includes complete autotrophs, which obtain their sole source of carbon from the atmosphere, mixotrophs (such as carnivorous plants), which are autotrophic organisms that partially obtain organic matter from sources other than the atmosphere, and complete heterotrophs that must feed to obtain organic matter.
      </p>
      <br />
      <p>
      Charles Elton pioneered the concept of food cycles, food chains, and food size in his classical 1927 book "Animal Ecology"; Elton's 'food cycle' was replaced by 'food web' in a subsequent ecological text. Elton organized species into functional groups, which was the basis for Raymond Lindeman's classic and landmark paper in 1942 on trophic dynamics. Lindeman emphasized the important role of decomposer organisms in a trophic system of classification. The notion of a food web has a historical foothold in the writings of Charles Darwin and his terminology, including an "entangled bank", "web of life", "web of complex relations", and in reference to the decomposition actions of earthworms he talked about "the continued movement of the particles of earth". Even earlier, in 1768 John Bruckner described nature as "one continued web of life".
      </p>
      </Box>
       
    </Layout>
  );
};

export default About;