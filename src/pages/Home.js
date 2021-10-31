import React, { useState } from 'react';
import Card from '../components/Card';
import { robots } from '../robots';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '../actions/setSearch';

import '../styles/Home.css'

const Home = () => {
    const [filteredRobots, setFilteredRobots] = useState(robots);
    const dispatch = useDispatch();
    const { search } = useSelector(state => state.searchSet);


    const onSearchChange = (event) => {
        dispatch(setSearch(event.target.value));
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredRobots(filteredRobots);
    }

    return (
        <div className="home">
            <h1 className="robo-friends">ROBOFRIENDS</h1>
            <input type="text" className="input-search" placeholder="Search Robots" value={search} onChange={onSearchChange} />
            <div className="robot-container">
                {filteredRobots.map((robot, index) => (
                    <Card key={index} name={robot.name} email={robot.email} id={robot.id} />
                ))}
            </div>

        </div>
    )
}

export default Home
