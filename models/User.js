// Import mongoose
const mongoose = require('mongoose');

// Assign the Schema object => to make sure the right data goes to the database, schema is the structure of data
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    occupation: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now // MangoDB will tell the date itself, date comes from the server. now is a static property like PI 
    }
})

// 1st argument is name of the collection (like excelsheet) 'user'
// 2nd argument where datas come from
module.exports = User = mongoose.model('user', UserSchema); // model will take Schema and will generate a model "user" for us. This model is specific to this Schema

/* Different function we can use: https://mongoosejs.com/docs/queries.html
user.find()
user.finMany()
user.insert()
user.upset() // update() or insert() depending on situation
user.delete()
*/

