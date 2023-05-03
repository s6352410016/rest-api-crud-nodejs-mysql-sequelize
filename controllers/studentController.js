const studentModel = require('../model/studentModel');

const createStudent = async (req, res) => {
    try {
        await studentModel.create(req.body);
        res.status(201).json({ msg: 'created successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
}

const getAllStudent = async (req, res) => {
    try {
        const data = await studentModel.findAll();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}

const getStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await studentModel.findOne({
            where: {
                id: id
            }
        });
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
}

const updateStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        await studentModel.update(req.body, {
            where: {
                id: id
            }
        });
        res.status(200).json({ msg: 'updated successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
}

const deleteStudentById = async (req, res) => {
    try {
        const { id } = req.params;
        await studentModel.destroy({
            where: {
                id: id
            }
        });
        res.status(200).json({ msg: 'deleted successfully' });
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    createStudent,
    getAllStudent,
    getStudentById,
    updateStudentById,
    deleteStudentById
}