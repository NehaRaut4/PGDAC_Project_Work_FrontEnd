import React from "react";
import './footer.css';
import logo from '../../assets/images/eco-logo.png'

import { Container, Row, Col} from 'reactstrap';
import { Link } from "react-router-dom";


const Footer = () =>
{
    return <footer className="footer">
        <Container>
            <Row>
                <Col lg='4'>
                <div className="logo">
                        <img src={logo} alt="logo" />
                        <div>
                            <h1>Rent & Store Here</h1>
                        </div>

                    </div>
                    <p className="footer__text mt-4">            
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui ratione consequuntur porro perferendis tenetur quidem animi ullam dolore quod. Sequi?
                    </p>
                    
                </Col>
                <Col lg='3'></Col>
                <Col lg='2'></Col>
                <Col lg='3'></Col>

            </Row>
        </Container>
    </footer>

};
export default Footer;