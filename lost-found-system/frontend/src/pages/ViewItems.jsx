import React, { useEffect, useState } from 'react';
import API from '../api/axios';
import ItemCard from '../components/ItemCard';
import './ViewItems.css'; // Optional styling

const ViewItems = () => {
    const [items, setItems] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterDate, setFilterDate] = useState('');

    useEffect(() => {
        API.get('/items')
            .then((res) => setItems(res.data))
            .catch((err) => console.error('Failed to fetch items:', err));
    }, []);

    // Filtered list
    const filteredItems = items.filter((item) => {
        const matchesSearch =
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.description.toLowerCase().includes(searchTerm.toLowerCase());

        const matchesDate = filterDate
            ? new Date(item.createdAt).toISOString().slice(0, 10) === filterDate
            : true;

        return matchesSearch && matchesDate;
    });

    return (
        <div className="view-items-container">
            <button className="back-button" onClick={() => window.history.back()}>⬅️ Back</button>
            <h2>📦 View Reported Items</h2>

            <div className="filters">
                <input
                    type="text"
                    placeholder="🔍 Search by name or description"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <input
                    type="date"
                    value={filterDate}
                    onChange={(e) => setFilterDate(e.target.value)}
                />
            </div>

            <div className="items-list">
                {filteredItems.length === 0 ? (
                    <p>No items match your filters.</p>
                ) : (
                    filteredItems.map((item) => (
                        <ItemCard key={item._id} item={item} />
                    ))
                )}
            </div>
        </div>
    );
};

export default ViewItems;
