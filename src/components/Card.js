import React from 'react';

import '../styles/Card.css'

const Card = ({ name, email, id }) => {
    return (
        <div className="card">
            <img src={`https://robohash.org/${id}?size=200x200`} alt="" />
            <div>
                <h3 className="card-name">{name}</h3>
                <p className="card-email">{email}</p>
            </div>

        </div>
    )
}

export default Card;
