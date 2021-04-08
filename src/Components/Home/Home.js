import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import ProductsDetails from '../ProductsDetails/ProductsDetails';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [spinner,setSpinner]=useState(true);

    useEffect(() => {
        fetch('https://rocky-reaches-51379.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            setSpinner(false)

    }, [])

    return (
        <div>
            <div className="container">
                <div className="row">
                    {
                        spinner &&  <Spinner className="text-center" animation="border" variant="success" />
                    }
                    {
                        products.map((product, id) => <ProductsDetails key={id} product={product} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;