import React from 'react'
import Navigation from './Navigation'
import {Link} from 'react-router-dom'
import {MDBIcon} from "mdbreact";
import 'mdbreact/dist/css/mdb.css';
import { Button} from 'react-bootstrap';

function Header(){
    return (
        <header className="border-b p-3 flex justify-between items-center bg-primary">
            <Link to="/" className="font-bold text-white">
               k12-cart
                    
  </Link>
  <Button variant="outline-info" style={{float:'right'}}>Search</Button>
            <MDBIcon icon="search" style={{float:'right'}} />
           

            <Navigation />
        </header>
    )
}

export default Header