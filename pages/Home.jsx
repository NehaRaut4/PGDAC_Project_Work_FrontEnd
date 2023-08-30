import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { helmet } from "../components/Helmet/helmet";
import '../styles/home.css';
import { Container, Row, Col } from "reactstrap";
import heroImg from '../assets/images/hero-img.png'
const Home = () =>{

    const year = new Date().getFullYear();
    return <helmet title={"Home"}>
        <section className="hero__section">
         <Container>
          <Row>
            <Col lg='6' md='6'>
             <div className="hero__content">
                <p className="hero__subtitle">
                 Trending products in {year} 
                </p>
                <h2>Make Your Interior More Attractive</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque natus aperiam, saepe possimus quibusdam sequi! Labore iste iure neque illo consequuntur, dolores est ab, sunt necessitatibus aliquam et soluta ullam!
                </p>
                <motion.button whileTap={{ scale: 1.2}}
                 className="buy__btn">
                   <Link to="/shop">SHOP NOW</Link>
                   </motion.button>
             </div>
            </Col>
              
            <Col lg='6' md='6'>
                <div className="hero__img">
                    <img src={heroImg} alt="" />
                </div>
            </Col>

          </Row>
         </Container>
        </section>
    </helmet>;
}

export default Home;
