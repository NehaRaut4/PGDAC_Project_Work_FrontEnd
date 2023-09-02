import React from "react";
import '../styles/cart.css';
import { helmet } from "../components/Helmet/helmet";
import tdImg from '../assets/images/arm-chair-01.jpg';
import CommonSection from '../components/UI/CommonSection';
import { Container, Row, Col } from "reactstrap";
import { motion } from "framer-motion";
import { cartActions} from '../redux/slices/cartSlice';
import { useSelector, useDispatch } from "react-redux";

const Cart = () =>
{
    const cartItem = useSelector(state=> state.cart.cartItem);

    return (
        <helmet  title="Cart">

            <CommonSection title='Shopping Cart'/>
            <section>
                <Container>
                    <Row>
                        <Col lg='9'>
                        <table className="table bordered">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Title</th>
                                        <th>Price</th>
                                        <th>Qty</th>
                                        <th>Subscription in months  </th>
                                        <motion.th whileTap={{scale: 1.2}}>Delete</motion.th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td><img src={tdImg} alt="" /></td>
                                        <td>Modern Arm Chair</td>
                                        <td>$299</td>
                                        <td>2px</td>
                                        <td><input type="number"/></td>
                                        <td>
                                            <motion.i whileTap={{scale: 1.2}} class="ri-delete-bin-line"></motion.i></td>
                                    </tr>
                                </tbody>
                            </table>
                                               
                            
                        </Col>

                        <Col lg='3'></Col>
                    </Row>
                </Container>
            </section>
        </helmet>
    );
};
export default Cart;