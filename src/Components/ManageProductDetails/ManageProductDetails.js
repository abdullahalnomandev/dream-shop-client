import React from 'react';
import "./ManageInventory.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ManageProductDetails = (props) => {

    const { product, price, wight, _id } = props.manageProduct;

    const deleteEventHandler = (id) => {
        fetch(`https://rocky-reaches-51379.herokuapp.com/delete/${id}`, {
            method: 'delete'
        })
            .then(res => res.json())
            .then(result => {
                if (result) {
                    alert("Product has been deleted")
                }
            })
    }

    return (

        <tbody>
            <tr>
                <td> {product}</td>
                <td>{price}</td>
                <td>{wight}</td>
                <td className="deleteIcon" onClick={() => deleteEventHandler(_id)}><FontAwesomeIcon icon={faTrash} /> Delate</td>
            </tr>

        </tbody>
    );
};

export default ManageProductDetails;