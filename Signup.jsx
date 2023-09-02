import React,{useState} from "react";
import { helmet } from "../components/Helmet/helmet";
import { Container,Row,Col,Form,FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import '../styles/login.css';


const Signup = () =>
{

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <helmet title="Signup">
          <section>
            <Container>
                <Row>
                    <Col lg='6' className="m-auto text-center">
                     <h3 className="fw-bold mb-4">Signup</h3>

                     <Form className="auth__form">
                        <FormGroup className="form__group">
                            <input 
                            type="text" 
                            placeholder="Username"  
                            value={username} 
                            onChange={(e)=>setUsername(e.target.value)}/>
                        </FormGroup>
                        
                        <FormGroup className="form__group">
                            <input type="password" placeholder="Enter your password"  
                             value={password} onChange={(e)=>setPassword(e.target.value)}/>
                        </FormGroup>

                        


                        <button type="submit" className="buy__btn auth__btn">Create an Account</button>
                        <p>Already have an account?{' '} 
                        <Link to='/login'>Login</Link></p>
                     </Form>
                    </Col>
                </Row>
            </Container>
          </section>
        </helmet>
    );
};
export default Signup;