import React, { useState } from 'react';
import './AddProduct.css'
import { useForm } from "react-hook-form";
import axios from 'axios';
import { toast } from 'react-toastify';


const AddProduct = () => {
    const [imageURL, setImgURL] = useState(null);
    const { register, handleSubmit, watch, errors } = useForm();

    toast.configure()
    const successNotification = () => {
        toast.success('Your Product has been added on the home page!', { position: toast.POSITION.TOP_CENTER })
    }

    const onSubmit = data => {
        const eventItems = {
            img: imageURL,
            product: data.product,
            price: data.price,
            wight: data.wight
        }

        console.log("evntItem", eventItems);
        fetch('https://rocky-reaches-51379.herokuapp.com/addProducts', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(eventItems)
        })

            .then(res => {
                if (res) {
                    successNotification();
                }
            })
    };

    const handleUploadImg = e => {

        const imageData = new FormData()
        imageData.set('key', 'f2ba7412e0a54266270f7441b219296d')
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImgURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    const style = {
        textAlign: "center",
        color: "blue",
        backgroundColor: "blanchedalmond",
        fontFamily: "arialWebkitBody",
    }
    return (
        <>
            <h2 style={style}>Add Product</h2>
            <div className="inputDetails">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row">

                        <div className=" details col-md-6">
                            <p>Product Name</p>

                            <input name="product" ref={register({ required: true })} placeholder="Product Name" />
                            <br /><br />
                            <p>Add Price</p>

                            <input name="price" ref={register({ required: true })} placeholder="Price" />
                            <br /><br />
                        </div>

                        <div className="col-md-6">
                            <p>Wight</p>

                            <input name="wight" ref={register({ required: true })} placeholder="Weight" />
                            <br /><br />
                            <p>Add Photo</p>
                            <input name="img" type="file" onChange={handleUploadImg} />
                        </div>

                    </div>
                    <input className="btnButton" type="submit" value="Save" />
                </form>
            </div>

        </>

    );
};

export default AddProduct;