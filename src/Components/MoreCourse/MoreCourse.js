import { Rating } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import React from 'react';
import '../Course/Course.css';

const MoreCourse = (props) => {
    // console.log(props.course)
    const { name, price, rating, img } = props.course;
    return (

        <div className="item">
            <img className="size w-50" src={img} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <h6> <Rating name="read-only" value={rating} readOnly /> </h6>
            <Button className="btn-primary rounded border border-primary">Buy Now</Button>
        </div>

    );
};

export default MoreCourse;