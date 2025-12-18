import React from 'react'

function Card({ title, text, active, onClick }) {
    return (
        <div className="col-md-4">
        <div 
            className="card mb-4"
            style={{ cursor: 'pointer' }}
            onClick={onClick}
        >

        
        <img class="card-img-top" src="..." alt="Card image cap"></img>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p
            className="card-text"
            style={{ color: active ? 'red' : 'black' }}
            >
        {text}
        </p>
        <p className="card-text">
        <small className="text-muted">Last updated 3 mins ago</small>
        </p>
        </div>
        </div>
        </div>
);
}

export default Card;
