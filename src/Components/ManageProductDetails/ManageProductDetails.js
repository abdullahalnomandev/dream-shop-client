import React from 'react';
import "./ManageInventory.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const ManageProductDetails = (props) => {

    const { product, price, wight, _id } = props.manageProduct;

    const deleteEventHandler = (e,id) => {
        fetch(`https://rocky-reaches-51379.herokuapp.com/delete/${id}`, {
            method: 'delete'
        })
            .then(result => {
                if (result) {
                    
                    e.target.parentNode.style.display="none";
                }
            })
    }  

    return (

        <tbody>
            <tr>
                <td> {product}</td>
                <td>{price}</td>
                <td>{wight}</td>
                <td className="deleteIcon" onClick={(e) => deleteEventHandler(e,_id)}><FontAwesomeIcon icon={faTrash} /> Delate</td>
            </tr>

        </tbody>  
    );
};


export default ManageProductDetails;