import React, { useEffect, useState } from 'react';
import ProductsDetails from '../ProductsDetails/ProductsDetails';

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://rocky-reaches-51379.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        products.map((product, id) => <ProductsDetails key={id} product={product} />)
                    }

                    {
                        products.length === 0 &&

                        <img style={{ marginLeft: '35%', marginTop: '15%' }} className="img-fluid" src="https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif" alt="" />

                    }
                </div>y
            </div>
        </div>
    );
};

export default Home;