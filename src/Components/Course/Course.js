import { Button, Rating } from '@mui/material';
import React from 'react';
import './Course.css'

const Course = (props) => {
    // console.log(props)
    const { name, price, rating, img } = props.course;
    const { handlePlaceOrder } = props;
    return (


        <div className="item">
            <img className="size " src={img} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <h6> <Rating name="read-only" value={rating} readOnly /> </h6>
            <Button variant="contained" onClick={handlePlaceOrder}>More Course</Button>
        </div>



    );
};

export default Course;