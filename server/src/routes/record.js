const express = require('express');
const Joi = require('joi');

const RecordModel = require('../models/record') 

const createRequestSchema = Joi.object({
    activityName: Joi.string().required(),
    timestamp: Joi.string().required(),
    duration: Joi.number().min(0).required(),
    calories: Joi.number().min(0).required(),
    description: Joi.string().allow('').required(),
})

const router = express.Router();

const records = [
    {
      _id: 'record-1',
      activityName: 'Running',
      timestamp: new Date(),
      duration: 4000,
      calories: 200,
      description: '',
    },
    {
      _id: 'record-2',
      activityName: 'Running',
      timestamp: new Date(),
      duration: 4000,
      calories: 200,
      description: '',
    },
    {
      _id: 'record-3',
      activityName: 'Running',
      timestamp: new Date(),
      duration: 4000,
      calories: 200,
      description: '',
    },
  ];
// validate data every time (this is amiddle ware function) 
router.use('./:recordId', async (req, res, next) => {
    const foundRecord = await RecordModel.findById(req.params.recordId);
    if(!foundRecord){
        res.status(404).send('Record not found!');
    } 
    req.record = foundRecord ;
    req.recordId = req.params.recordId;
    return next();
    
})
// records router
router.get('/:recordsId', (req, res, next) => {
    const recordId = req.params.recordsId ;
    const index = records.findIndex((r) => r._id === recordId)
    const foundRecord = records[index];
    if(!foundRecord){
        return res.status(404).send('Record not found');
    }
    return  res.status(400).send(foundRecord);
});
router.get('/', async (req, res, next) => {
    const records = await RecordModel.find({});
    res.send(records);
});
router.post('/', async (req, res, next) => {
    const body = req.body;
    
    const newRecord = new RecordModel(body)

    const errors =  newRecord.validateSync();
    if(errors){
        const errorFieldName =  Object.keys(errors.errors);
        if (errorFieldName.length > 0 ){
            return res.status(400).send(errors.errors[errorFieldName[0]].message) ;
        };

    }

    await newRecord.save();
    return res.status(201).send(newRecord);
});

router.put('/:recordsId', (req, res, next) => {});


router.delete('/:recordsId', async (req, res, next) => {
    const recordId = req.params.recordId ;
    await RecordModel.deleteOne({ _id : recordId})
    // RecordModel.findOneAndDelete() อีกวิธีที่ใช้ได้ 
    return res.status(204).send();
});

module.exports = router ;