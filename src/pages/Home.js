import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import { useSelector, useDispatch } from 'react-redux';
import { getRobots, setSearch } from '../actions/setSearchAction';

import '../styles/Home.css'

const Home = () => {

    const dispatch = useDispatch();
    const { search } = useSelector(state => state.searchSet);
    const { robots, loading, error } = useSelector(state => state.robotsGet);
    const [filteredRobots, setFilteredRobots] = useState(robots);

    useEffect(() => {
        if (loading) {
            dispatch(getRobots());
        }
        setFilteredRobots(robots);

    }, [dispatch, robots, loading]);

    const onSearchChange = (event) => {
        dispatch(setSearch(event.target.value));
        const filteredRobots = robots.filter(robot => robot.name.toLowerCase().includes(event.target.value.toLowerCase()));
        setFilteredRobots(filteredRobots);
    }

    return (loading ? <h1>Loading...</h1> :
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
