import React, {useState} from "react";
import CommonSection from "../components/UI/CommonSection";
import { helmet } from "../components/Helmet/helmet";
import { Container, Row, Col } from "reactstrap";
import '../styles/shop.css';
import product from '../assets/data/product';
import ProductLists from '../components/UI/ProductList';
const Shop = () =>
{

    const [productsData, setProducstData] = useState(product)

    const handleFilter = (e) =>{
        const filterValue = e.target.value;
        if(filterValue === 'sofa') {
            const filteredProducts = product.filter(
               (item)=> item.category === 'sofa' 
            );
            setProducstData(filteredProducts);
        }
    };
    return (
    <helmet title='shop'>
        <CommonSection  title='products' />

      <section>
        <Container>
            <Row>
                <Col lg='3' md='3'>
                    <div className="filter__widget">
                        <select >
                            <option>Filter By Category</option>

                            <option value="sofa">Sofa</option>
                            <option value="mobile">Mobile</option>
                            <option value="chair">Chair</option>
                            <option value="watch">Watch</option>
                            <option value="wireless">Wireless</option>

                        </select>
                    </div>
                </Col>
                <Col lg='3' md='3'>
                <div className="filter__widget">
                        <select >
                            <option>Sort By</option>

                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                            
                        </select>
                    </div>
                </Col>
                <Col lg='6' md='6'>
                    <div className="search__box">
                        <input type="text" placeholder="Search...." />
                        <span>
                            <i class="ri-search-line"></i>
                        </span>
                        
                    </div>
                </Col>


            </Row>
        </Container>
      </section>
       
       <section>
        <Container>
            <Row>
                {
                    productsData.length === 0 ? (<h1>No products are found !</h1>
                   ) : (
                   <ProductLists data={productsData}/>
                )}
            </Row>
        </Container>
       </section>
    </helmet>
    );
};
export default Shop;