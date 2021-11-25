import React, { useEffect, useState } from 'react';
import Person from '../Person/Person'

const About = () => {
    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch('./teams.JSON')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])

    return (
        <div>
            <h2 className="text-center my-4 text-primary">About Our Teammates</h2>
            <div className="container">
                {
                    teams.map(person => <Person
                        key={person.id}
                        person={person}
                    ></Person>)
                }
            </div>
        </div>
    );
};

export default About;