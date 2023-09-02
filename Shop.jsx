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
        if(filterValue === 'sofa') 
        {
            const filteredProducts = product.filter(
               (item)=> item.category === 'sofa' 
            );
            setProducstData(filteredProducts);
        }
        if(filterValue === 'mobile') 
        {
            const filteredProducts = product.filter(
               (item)=> item.category === 'mobile' 
            );
            setProducstData(filteredProducts);
        }
        if(filterValue === 'chair') 
        {
            const filteredProducts = product.filter(
               (item)=> item.category === 'chair' 
            );
            setProducstData(filteredProducts);
        }
        if(filterValue === 'watch') 
        {
            const filteredProducts = product.filter(
               (item)=> item.category === 'watch' 
            );
            setProducstData(filteredProducts);
        }
        if(filterValue === 'wireless') 
        {
            const filteredProducts = product.filter(
               (item)=> item.category === 'wireless' 
            );
            setProducstData(filteredProducts);
        }
    };

    const handleSearch = (e) => {
        const searchTerm = e.target.value

        const searchProducts = product.filter(item=> item.productName.toLowerCase().includes(searchTerm.toLowerCase()))

        setProducstData(searchProducts)
    }
    return (
    <helmet title='shop'>
        <CommonSection  title='products' />

      <section>
        <Container>
            <Row>
                <Col lg='3' md='6'>
                    <div className="filter__widget">
                        <select onChange={handleFilter}>
                            <option>Filter By Category</option>

                            <option value="sofa">Sofa</option>
                            <option value="mobile">Mobile</option>
                            <option value="chair">Chair</option>
                            <option value="watch">Watch</option>
                            <option value="wireless">Wireless</option>

                        </select>
                    </div>
                </Col>
                <Col lg='3' md='6' className="text-end">
                <div className="filter__widget">
                        <select >
                            <option>Sort By</option>

                            <option value="ascending">Ascending</option>
                            <option value="descending">Descending</option>
                            
                        </select>
                    </div>
                </Col>
                <Col lg='6' md='12'>
                    <div className="search__box">
                        <input type="text" placeholder="Search...." onChange={handleSearch}/>
                        <span>
                            <i class="ri-search-line"></i>
                        </span>
                        
                    </div>
                </Col>


            </Row>
        </Container>
      </section>
       
       <section className="pt-0">
        <Container>
            <Row>
                {
                    productsData.length === 0 ? (
                    <h1 className="text-center fs-4">No products are found !</h1>
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