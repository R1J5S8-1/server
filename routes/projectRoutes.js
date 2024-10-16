const express = require('express');
const router = express.Router();
const {
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject
} = require('../controller/projectController');   //importing controller

// GET all projects
router.get('/get', getProjects);

// GET single project
router.get('/get/:id', getProject);

// POST create project  
router.post('/create', createProject);

// PUT update project   
router.put('/update/:id', updateProject);

// DELETE project       
router.delete('/delete/:id', deleteProject);

module.exports = router;