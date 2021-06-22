import React, { useState } from 'react';
import AddProduct from '../AddProduct/AddProduct';
import MangeInventory from '../ManageInventory/MangeInventory';
import './Adimin.css';
import AdminSidebar from './AdminSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTasks, faPlus } from '@fortawesome/free-solid-svg-icons'


const Admin = () => {

    const [manageProduct, setManageProduct] = useState(true)
    return (

        <div className="row">
            <div className="col-md-3">
                <div className="sidevar">
                    <h3>DREAM SHOP</h3>

                    <h5 onClick={() => setManageProduct(false)}> <FontAwesomeIcon icon={faTasks} /> Manage Product</h5>
                    <h5 onClick={() => setManageProduct(true)}> <FontAwesomeIcon icon={faPlus} /> Add product</h5>
                </div>

            </div>
            <div className="col-md-9">
                {
                    manageProduct ? <AddProduct /> : <MangeInventory />
                }
            </div>
        </div>
    );
};

export default Admin;