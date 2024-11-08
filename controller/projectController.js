const projects = require('../model/projectModel');


// Get all projects
const getProjects = async (req, res) => {
    try {
        const projectDetails = await projects.find();
        res.status(200).json(projectDetails);
    } catch (error) {
        res.status(404).json({ message: error.message });
        console.log(error);
    }
}

// Get single project
const getProject = async (req, res) => {
    try {
        const project = await projects.findById(req.params.id);
        res.status(200).json(project);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// POST create project
const createProject = async (req, res) => {
    const project = req.body;
    req.header('Content-Type', 'application/json');
    const newProject = new projects(project);
    try {
        await newProject.save();
        res.status(201).json(newProject);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// PUT update project
const updateProject = async (req, res) => {
    const { id: _id } = req.params;
    const project = req.body;
    if (!project._id) {
        project._id = _id;
    }
    try {
        const updatedProject = await projects.findByIdAndUpdate(_id, project, { new: true });
        res.json(updatedProject);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// DELETE project
const deleteProject = async (req, res) => {
    const { id } = req.params;
    try {
        await projects.findByIdAndDelete(id);
        res.json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

module.exports = { getProjects, getProject, createProject, updateProject, deleteProject };