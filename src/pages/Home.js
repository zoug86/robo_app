import React, { useState } from 'react';
import Card from '../components/Card';
import { robots } from '../robots';

import '../styles/Home.css'

const Home = () => {
    const [searchField, setSearchField] = useState('');
    const [filteredRobots, setFilteredRobots] = useState(robots);

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredRobots(filteredRobots);
    }

    return (
        <div className="home">
            <h1 className="robo-friends">ROBOFRIENDS</h1>
            <input type="text" className="input-search" placeholder="Search Robots" value={searchField} onChange={onSearchChange} />
            <div className="robot-container">
                {filteredRobots.map((robot, index) => (
                    <Card key={index} name={robot.name} email={robot.email} id={robot.id} />
                ))}
            </div>

        </div>
    )
}

export default Home
