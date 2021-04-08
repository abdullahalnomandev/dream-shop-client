import React, { useEffect, useState } from 'react';
import ManageProductDetails from '../ManageProductDetails/ManageProductDetails';

const MangeInventory = () => {

    const [manageProducts, setManageProducts] = useState([]);

    useEffect(() => {
        fetch('https://rocky-reaches-51379.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, [])

    return (
        <div>
            <h1>Total Product {manageProducts?.length}</h1>
            <table>
                <thead>
                    <tr> <th>Product Name</th><th> Wight</th><th>Price </th> <th>Action</th></tr>
                </thead>
                {
                    manageProducts.map((manageProduct, id) => <ManageProductDetails key={id} manageProduct={manageProduct} />)
                }
            </table>
        </div>
    );
};

export default MangeInventory;