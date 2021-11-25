import React from 'react';

const Person = (props) => {
    // console.log(props)
    const { name, img, age, experience, expert } = props.person

    return (
        <div>
            <div className="item">
                <img className="size" src={img} alt="" />

                <h3>Name: {name}</h3>
                <h5>Expert: {expert}</h5>
                <h6>Experience: {experience}</h6>
                <p>Age: {age}</p>

            </div>
        </div>
    );
};

export default Person;