import React, { useContext, useEffect, useState } from 'react';
import { UseContext } from '../../App';
import OrderDetails from '../OrderDetails/OrderDetails';
import './Order.css';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const [logInUser, setLogInUser] = useContext(UseContext);
    useEffect(() => {

        fetch(`https://rocky-reaches-51379.herokuapp.com/orders?email=${logInUser.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, []);
  
    return (
        <>
            <div className="order-summery">

                <h1>Order summary</h1>
                <h5>E-mail: {orders[0]?.email}</h5>
                <h3>Hello, {orders[0]?.name}</h3>
            </div>

            <h4 className="order">You have {orders.length} Orders</h4>
            <table>
                <thead>
                    <tr> <th>Product Name</th><th> Quantity</th><th>Price </th> <th>Order Date</th></tr>
                </thead>

                {
                    orders.length ===0 && <h5 className="text-center">Loading...</h5>
                }

                {
                    orders.map(order => <OrderDetails order={order} />)

                }

            </table>

        </>
    );
};

export default Orders;


