const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectModel = new Schema({
  project_Id: {
    type: String,
    required: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  assignedTo: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  task: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
    default: Date.now,
  },
  endTime: {
    type: Date,
    required: true,
    default: Date.now,
  },
    status: {
    type: String,
    required: true,
    // default: 'Pending',
  },
});

module.exports = mongoose.model("projects", projectModel);
