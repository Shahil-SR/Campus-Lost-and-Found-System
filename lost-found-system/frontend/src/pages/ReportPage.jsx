import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import API from '../api/axios';
import './ReportPage.css'; // This should exist

const ReportPage = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        description: '',
        location: '',
        status: 'lost',
        mobile: '',
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Item name is required.';
        if (!formData.description.trim()) newErrors.description = 'Description is required.';
        else if (formData.description.length < 10) newErrors.description = 'Minimum 10 characters required.';
        if (!formData.location.trim()) newErrors.location = 'Location is required.';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' }); // clear error on change
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        try {
            const res = await API.post('/items', formData);
            alert('Item reported successfully!');
            console.log('✅ Item submitted:', res.data);
            setFormData({ name: '', description: '', location: '', status: 'lost', mobile: ''});
            setErrors({});
        } catch (err) {
            console.error(err);
            alert('Failed to report item.');
        }
    };

    return (
        <div className="report-container">
            <button className="back-button" onClick={() => navigate('/')}>⬅️ Back</button>
            <h2>📢 Report Lost or Found Item</h2>

            <form className="report-form" onSubmit={handleSubmit}>
                <input
                    name="name"
                    placeholder="Item name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="error">{errors.name}</p>}

                <textarea
                    name="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                />
                {errors.description && <p className="error">{errors.description}</p>}

                <input
                    name="location"
                    placeholder="Location"
                    value={formData.location}
                    onChange={handleChange}
                />
                {errors.location && <p className="error">{errors.location}</p>}
                <input
                    name="mobile"
                    placeholder="Your Mobile Number"
                    value={formData.mobile || ''}
                    onChange={handleChange}
                    required
                />
                {errors.mobile && <p className="error">{errors.mobile}</p>}

                <select name="status" value={formData.status} onChange={handleChange}>
                    <option value="lost">Lost</option>
                    <option value="found">Found</option>
                </select>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default ReportPage;
