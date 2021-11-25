import React, { useEffect, useState } from 'react';
import '../Course/Course.css'
import MoreCourse from '../MoreCourse/MoreCourse';

const Courses = () => {

    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('./Courses.JSON')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])

    return (
        <div className="container">

            {
                courses.map(course => <MoreCourse
                    key={course.id}
                    course={course}
                > </MoreCourse>)
            }


        </div>
    );
};

export default Courses;