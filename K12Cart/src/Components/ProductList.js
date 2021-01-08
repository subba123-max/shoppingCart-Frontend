import React from 'react';
import { Col } from 'react-bootstrap';
const  ProductList = (props) =>
{
    // return (
    //     <div>
    //     { props.products && props.products.map( product  =>{
    //         return <div>{product.title}</div>
    //     })}
            
    //    </div>            
            
    // )

    return (
        <Col className="">
        <div className='container'>
            <br />
            <div className="row" id="ads">

                {props.products && props.products.map((product) => (
                    <div className="col-md-4" key={product.id}>
                        <div className="card rounded" style={{ height: '500px',margin:'10px'}} >
                            <div className="card-image" >
                                <span className="card-notify-badge " >{product.title}</span>
                                {/* <span class="card-notify-year">2018</span> */}
                                 <img className="img" style={{
                                    width: 'auto',
                                    height: '200px'

                                }}
                                    src={product.image} alt='random images' /> 
                                         

                            </div>
                            <div className="card-image-overlay m-auto" >
                                <span className="card-detail-badge" >{product.price} Rs/-</span>
                            </div>
                            <div className="card-body text-center" >
                                <div className="ad-title m-auto" >
                                    <h5 >{product.description}</h5>
                                </div>
                                <button className="btn btn-sm btn-info btn-block" href="/orders" >buy now</button>
                                <button className="btn btn-sm btn-primary btn-block" href="/cart" >add to cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
        </Col>


    );

}

export default ProductList;