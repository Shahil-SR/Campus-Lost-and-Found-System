import React from 'react';

const ItemCard = ({ item }) => {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Status:</strong> {item.status}</p>
            <p>📞 Contact: {item.mobile}</p>

        </div>
    );
};

export default ItemCard;
