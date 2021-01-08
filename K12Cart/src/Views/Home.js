import React from 'react'
// import Loader from '../Components/Loader'
import Products from '../Components/Products'


function Home(props){
   
    

    // if(products.loading){
    //     content = <Loader></Loader>
    // }

    

    return (
        <div className="container mx-auto">
            <h1 className="font-bold text-2xl mb-3">
                
                <Products />
            </h1>
            
        </div>
    )
}



export default Home