const mongoose = require("mongoose");
const Parts = require("../models/Parts.model");

const createPart = async (req, res) => {
    try {
        const part = new Parts(req.body);
        await part.save();
        res.status(201).json(part);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getAllParts = async (req, res) => {
    try {
        const parts = await Parts.find();
        res.status(200).json(parts);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getPartById = async (req, res) => {
    try {
        const { id } = req.params;
        const part = await Parts.findById(id);
        if (!part) {
            return res.status(404).json({ message: 'Part not found' });
        }
        res.status(200).json(part);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updatePart = async (req, res) => {
    try {
        const { id } = req.params;
        const part = await Parts.findByIdAndUpdate(id, req.body, { new: true });
        if (!part) {
            return res.status(404).json({ message: 'Part not found' });
        }
        res.status(200).json(part);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updatePartStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const part = await Parts.findByIdAndUpdate(id, { status }, { new: true });
        if (!part) {
            return res.status(404).json({ message: 'Part not found' });
        }
        res.status(200).json(part);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deletePart = async (req, res) => {
    try {
        const { id } = req.params;
        const part = await Parts.findByIdAndDelete(id);
        if (!part) {
            return res.status(404).json({ message: 'Part not found' });
        }
        res.status(200).json(part);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createPart,
    getAllParts,
    getPartById,
    updatePart,
    updatePartStatus,
    deletePart
};
