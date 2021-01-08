import React from 'react';
import axios from 'axios';
// import styled from 'styled-components';
import ProductList from '../Components/ProductList';
class Products extends React.Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }
    componentDidMount() {
        console.log("componentDidMount");

        axios.get('http://127.0.0.1:8000/product/').then(res => {
            const products = res.data;
            this.setState({ products });
            console.log(res.data)
        });


    }
    render() {
        return (
            <div>

               
                <div >
                
                   <ProductList  products={this.state.products} />

                    
                </div>
                </div>
        );
    }
}
export default Products;