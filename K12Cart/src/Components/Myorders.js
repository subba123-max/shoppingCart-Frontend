import React, { useState, useEffect} from 'react';
import { Col } from 'react-bootstrap';

const Myorders = () =>{
const [orders,setOrders] = useState([]);
useEffect( () => {
    fetch('http://127.0.0.1:8000/orders/',{
        method: 'GET',
        headers : {
            'content-Type': 'application/json',
            'Authorization':'Token de43c1ad82890a4c7f35b7e8509603e16e414ea9'
        }
    })
    .then(resp => resp.json())
    .then(resp => setOrders(resp))
    .catch(error => console.log(error))
    // console.log(resp.json())

},[])
return (
    // <div>
    // {orders.map(order => {

    //     return(
    //     <div> <li key={order.id}>{order.id}</li>
    //     <li key={order.id}>{order.mode_of_payment}</li>
    //     </div>)
    // }

    // )}

    // </div>

    <Col className="">
        <div className='container'>
            <br />
            <div className="row" id="ads">

                {orders.map(order=> (
                    <div className="col-md-4" key={order.id}>
                        <div className="card rounded" style={{ height: '500px',margin:'10px'}} >
                            <div className="card-image" >
                                <span className="card-notify-badge " >Quantity:<span className='text-primary'>{order.total}</span></span>
                                {/* <span class="card-notify-year">2018</span> */}
                                 <img className="img" style={{
                                    width: '100%',
                                    height: '200px'

                                }}
                                    src='#' alt='random images' /> 
                                         

                            </div>
                            <div className="card-image-overlay m-auto" >
                                <span className="card-detail-badge" >status: {order.status} </span>
                            </div>
                            <div className="card-body text-center" >
                                <div className="ad-title m-auto" >
                                    <h5 >ModeofPayment:<span className='text-primary'>{order.mode_of_payment}</span></h5>
                                </div>
           
                                <button className="btn btn-sm btn-warning btn-block" href="#" >checkout</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
        </Col>
)
}
export default Myorders;