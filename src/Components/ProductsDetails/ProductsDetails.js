import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ProductsDetails.css'

const ProductsDetails = (props) => {

    const { product, price, img, wight, _id } = props.product;
    return (

        <div className="col-md-4 mb-5 mt-5">
            <Card className="classContainer">
                <Card.Img variant="top" src={img} />
                <Card.Body style={{ textAlign: 'center' }}>
                    <Card.Title> <span className="text-secondary">{product} -{wight}</span> </Card.Title>
                    <div className="d-flex  ">
                        <h3 className="mr-5" >$ {price}</h3>
                        <Button as={Link} to={`/checkout/${_id}`} variant="success"> Buy Now</Button>
                    </div>
                </Card.Body>
            </Card>

        </div>
    );
};

export default ProductsDetails;