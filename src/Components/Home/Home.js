import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Course from '../Course/Course';
import '../Course/Course.css'
import Extra from '../Extra/Extra';

const Home = () => {

    const [courses, setCourses] = useState([]);
    const history = useHistory();

    useEffect(() => {
        fetch('./Course.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    const handlePlaceOrder = () => {
        history.push('/courses')
    }

    return (
        <div>
            <div>
                <Extra></Extra>
            </div>
            <div>
                <h2 className="text-center text-primary">Our Best Courses</h2>
            </div>
            <div className="container">

                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                        handlePlaceOrder={handlePlaceOrder}

                    ></Course>)
                }


            </div>
        </div>

    );
};

export default Home;