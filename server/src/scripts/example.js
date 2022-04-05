const mongoose = require('mongoose');

const run = async () => {
    const uri ='mongodb+srv://m001-student:m001-mongodb-basics@sandbox.jztj3.mongodb.net/sample_training?retryWrites=true&w=majority'
    await mongoose.connect(uri)

    // db = sample_training
    // collection = zips
    const schema = new mongoose.Schema({
        city : String,
        zip: Number,
        loc : { y : Number, x : Number},
        pop : Number,
        state : {
            type : String, 
            minLength : [2, 'State must contain at least 2 chars'],
            maxLength : [3, 'State must contain at most 3 chars']
        },
    })

    const ZipModel = mongoose.model('Zip', schema, 'zips' ); // select collection name 'zips'

    // ZipModel.findById('zip-001');  // GET by id
    // ZipModel.find({}); // GET all
    // ZipModel.create(); // Create
    // ZipModel.updateMany({ city : 'ALPINE'}, {pop : { $inc: 10}}); // Update
    // ZipModel.deleteMany({city : 'ALPINE'}); // Delete
    // const zips = await ZipModel.find({}); 
    // console.log(zips);

    // await ZipModel.updateMany({city : 'ALPINE'}, {pop : 1000} );

    const newZip = new ZipModel({
        city : 'Bangkok',
        zip: '10600',
        loc : { y : 100, x : 200},
        pop : 1000000,
        state : 'KrungThep'
    })
    await newZip.save();  
};

run().then(()=> {
    console.log('Done');
    process.exit(0);
}).catch((e)=> {
    console.log(e);
    process.exit(1)
})