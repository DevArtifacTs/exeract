const mongoose = require('mongoose');

// 1)Define schema
const recordSchema = new mongoose.Schema({
    activityName: {type : String, minLength : [3, 'activity name should contain at least 3 chars']},
    timestamp: {type : Date},
    duration: {type : Number, min : [0, 'Duration must be at least 0']},
    calories: {type : Number, min : [0, 'Calories must be at least 0']},
    description: {type : String},
});

// 2) Define model
const RecordModel = mongoose.model('Record', recordSchema, 'records');

module.exports = RecordModel ;