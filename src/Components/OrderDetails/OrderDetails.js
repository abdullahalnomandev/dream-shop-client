import React from 'react';
import './OrderDetails.css';

const OrderDetails = (props) => {

    const { productName, quantity, amount, date } = props.order;
    return (

        <tbody className="tbody">
            <tr>
                <td> {productName}</td>
                <td>{quantity}</td>
                <td>$ {amount}</td>
                <td>{(new Date(date).toDateString('dd/MM/YYYY'))} </td>

            </tr>


        </tbody>
    );
};

export default OrderDetails;