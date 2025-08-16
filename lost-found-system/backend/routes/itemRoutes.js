const express = require('express');
const router = express.Router();

// Make sure this path is correct
const {
    getAllItems,
    createItem,
    getItemById,
    deleteItem,
} = require('../controllers/itemController'); // ✅ Make sure this file exists!

router.get('/', getAllItems);        // ✅ Must be a function
router.post('/', createItem);       // ✅ Must be a function
router.get('/:id', getItemById);    // ✅ Must be a function
router.delete('/:id', deleteItem);  // ✅ Must be a function

module.exports = router;
