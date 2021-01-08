import React from 'react';

const Logout = (props) => {
    
    return (
        <div>
      {props.token ? window.location.href = '/signin':null} 
          
        </div>
    )
}
export default  Logout;