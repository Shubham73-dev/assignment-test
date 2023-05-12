import React from 'react'

const Card = ({ data }) => {
    return (
        <div className="cardContainer">
            <div className="card">
                <h2>{data.title}</h2>
                <div className="img-container">
                    <img src={data.image} alt="" />
                </div>
                <p>{data.description}</p>
                <span>Price: {data.price}</span>
            </div>
        </div>
    )
}

export default Card