const mongoose = require('mongoose');
module.exports = async () => {
    const uri = "mongodb://localhost:27017/systemai";
 try {
        await mongoose.connect(uri);
        console.log('Db Connected');
    } catch (error) {
        console.error('Error connecting to MongoDB:');
        console.error(error);
        process.exit(1);
    }
};
