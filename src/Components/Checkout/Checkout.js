import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UseContext } from '../../App';
import {  toast } from 'react-toastify';


const Checkout = () => {
    toast.configure()

    const successNotification = () => {
        toast.success('Thank you.Your Order has been successfull !',{position : toast.POSITION.TOP_CENTER})
    }

    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [logInUser, setLogInUser] = useContext(UseContext);

    useEffect(() => {
        fetch('https://rocky-reaches-51379.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const singleProductItem = products.find(pd => pd._id == id)

    const handleCheckOut = () => {

        const orderDetails = {
            name: logInUser.name,
            email: logInUser.email,
            productName: singleProductItem?.product,
            quantity: 1,
            amount: singleProductItem?.price,
            date: new Date()
        }

        console.log(orderDetails);

        fetch('https://rocky-reaches-51379.herokuapp.com/orderDetails', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    successNotification()
                }
            })
    }


    return (
        <div className="container mt-5">
            <h2>Checkout</h2>
            <table className="table mt-5">
                <thead>
                    <tr> <th>Description</th><th> Quantity</th><th>Price </th></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{singleProductItem?.product}</td>
                        <td>1</td>
                        <td> $ {singleProductItem?.price}</td>
                    </tr>
                    <tr>
                        <th> Total</th>
                        <th></th>
                        <th> $ {singleProductItem?.price}</th>
                    </tr>

                </tbody>
            </table>
            <button onClick={handleCheckOut} className="btn btn-success"> CheckOut</button>

        </div>
    );
};

export default Checkout;