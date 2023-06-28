import React from 'react'
import Layout from '../components/Layout';
import {Link} from "react-router-dom";
import '../styles/HomeStyle.css';

export const Home = () => {
  return (
    <Layout>
      <div className="home" style={{backgroundImage: 'url(/images/vieww.jpg)'}}>
      <div classname="headerContainer">
      <h1>Food Website</h1>
      <p>Best Food in India</p>
      <Link to="/Menu">
      <button> ORDER NOW </button>
      </Link>
      </div>
      </div>
    </Layout>
  );
};
export default Home;
