const Item = require('../models/Item');

// GET all items
const getAllItems = async (req, res) => {
    try {
        const items = await Item.find().sort({ createdAt: -1 }); // Latest items first
        res.status(200).json(items);
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ error: 'Failed to fetch items' });
    }
};

// CREATE item
const createItem = async (req, res) => {
    try {
        const { name, description, location, status,mobile } = req.body;

        // Basic validation
        if (!name || !description || !location || !status ||!mobile) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const newItem = new Item({
            name,
            description,
            location,
            status,
            mobile,
        });

        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        console.error('Error creating item:', error);
        res.status(400).json({ error: 'Failed to create item' });
    }
};

// GET item by ID
const getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json(item);
    } catch (error) {
        console.error('Error fetching item by ID:', error);
        res.status(500).json({ error: 'Failed to fetch item' });
    }
};

// DELETE item by ID
const deleteItem = async (req, res) => {
    try {
        const deletedItem = await Item.findByIdAndDelete(req.params.id);
        if (!deletedItem) {
            return res.status(404).json({ error: 'Item not found' });
        }
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        console.error('Error deleting item:', error);
        res.status(500).json({ error: 'Failed to delete item' });
    }
};

module.exports = {
    getAllItems,
    createItem,
    getItemById,
    deleteItem,
};
