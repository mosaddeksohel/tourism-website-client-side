import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './addProduct.css'

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://frozen-sands-28577.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Product offer Successfuly')
                    reset();
                }
            })
    };
    return (
        <div className="add-product">
            <h2>Add a New Offer</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="name" />
                <textarea {...register("description")} placeholder="description" />
                <input type="number" {...register("duration")} placeholder="duration" />
                <input {...register("img")} placeholder="image" />
                <input type="submit" />
            </form>

        </div>
    );
};

export default AddProducts;