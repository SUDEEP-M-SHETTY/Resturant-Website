import React from 'react'
import Layout from '../components/Layout/Layout';
import {Link} from "react-router-dom";
import Banner from '../images/banner.jpeg';
import '../styles/HomeStyles.css';
import SetMealIcon from '@mui/icons-material/SetMeal';

const Home = () => {
  return (
    <Layout>
      <div className="home" style={{ backgroundImage: `url(${Banner})` }}>
        <div className="headerContainer">
        <h1>KN RESTURANT</h1>
        <p>Best Sea-food in Manglore <SetMealIcon /></p>
        <Link to="/menu">
       
        <button>
          ORDER NOW
        </button>
        </Link>
        </div>
      </div>
        
    </Layout>
  );
};

export default Home;