import React from 'react';
import Card from '../components/Card';
import { robots } from '../robots';

import '../styles/Home.css'

const Home = () => {
    return (
        <div className="home">
            <h1>ROBOFRIENDS</h1>
            <input type="text" className="input-search" placeholder="Search Robots" />
            <div className="robot-container">
                {robots.map((robot, index) => (
                    <Card key={index} name={robot.name} email={robot.email} id={robot.id} />
                ))}
            </div>

        </div>
    )
}

export default Home
