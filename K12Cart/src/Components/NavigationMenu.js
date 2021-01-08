import React from 'react'
import { Link } from "react-router-dom"
import {MDBIcon} from "mdbreact";
import 'mdbreact/dist/css/mdb.css';

function NavigationMenu(props){
    return (
        <div>
            <div className="font-bold py-3">
            <MDBIcon fab icon="amazon" /> K12-cart
            </div>
            <ul>
            <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                        k12 Offers Zone
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                       <MDBIcon icon="home" /> Home
                    </Link>
                </li>
                <li>
                
                    <Link 
                        to="/signin" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                     <MDBIcon icon="sign-in-alt" />  SignIn
                    </Link>
                </li>
                <li>
               
                    <Link 
                        to="/signup" 
                        className="text-blue-500 py-3 border-t border-b block"
                        onClick={props.closeMenu}
                    >
                       <MDBIcon far icon="registered" />  SignUp
                    </Link>
                </li>
                <li>
                    <Link 
                        to="/myorders" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                       My Orders
                    </Link>
                </li>
                <li>
                
                    <Link 
                        to="/cart" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                     <MDBIcon icon="cart-plus" />  My Cart
                    </Link>
                </li>
                <li>
               
                    <Link 
                        to="/about" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                        <MDBIcon fab icon="amilia" /> About
                    </Link>
                </li>

                <li>
               
               <Link 
                   to="/logout" 
                   className="text-blue-500 py-3 border-b block"
                   onClick={props.closeMenu}
               >
                   <MDBIcon icon="sign-out-alt" /> logout
               </Link>
           </li>
                <li>
                
                    <Link 
                        to="/settings" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                      <MDBIcon icon="cog" /> settings
                    </Link>
                </li>
                <li>
               
                    <Link 
                        to="/reports" 
                        className="text-blue-500 py-3 border-b block"
                        onClick={props.closeMenu}
                    >
                       <MDBIcon icon="bug" />Report
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default NavigationMenu;

