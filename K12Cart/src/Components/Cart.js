import React, { useState, useEffect} from 'react';
import {Col} from 'react-bootstrap';

const Cart = () =>{
const [orderitems,setOrderitems] = useState([]);
useEffect( () => {
    fetch('http://localhost:8000/order_items/',{
        method: 'GET',
        headers : {
            'content-Type': 'application/json',
            'Authorization':'Token de43c1ad82890a4c7f35b7e8509603e16e414ea9'
        }
    })
    .then(resp => resp.json())
    .then(resp => setOrderitems(resp))
    .catch(error => console.log(error))
    // console.log(resp.json())

},[])
return (
    <Col className="">
        <div className='container'>
            <br />
            <div className="row" id="ads">

                {orderitems.map(order=> (
                    <div className="col-md-4" key={order.id}>
                        <div className="card rounded" style={{ height: '500px',margin:'10px'}} >
                            <div className="card-image" >
                                <span className="card-notify-badge bg-primary " > <span className='text-white'> {order.product_id.title}</span></span>
                                {/* <span class="card-notify-year">2018</span> */}
                                 <img className="img" style={{
                                    width: 'auto',
                                    height: '200px'

                                }}
                                    src={order.product_id.image} alt='random images' /> 
                                         

                            </div>
                            <div className="card-image-overlay m-auto" >
                                <span className="card-detail-badge" >price {order.price} </span>
                            </div>
                            <div className="card-image-overlay m-auto" >
                                <span className="card-detail-badge" >quantity {order.quantity} </span>
                            </div>
                            <div className="card-body text-center" >
                                <div className="ad-title m-auto" >
                                    <h5 >total_cost <span className='text-primary'>{order.total_cost} </span></h5>
                                </div>
           
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
        </Col>

)
}
export default Cart;