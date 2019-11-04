// Step 1. Create model in models/Feed.js

// Import mongoose
const mongoose = require('mongoose');

// Assign the Schema object => to make sure the right data goes to the database, schema is the structure of data
const Schema = mongoose.Schema;

// Step 2. Create a schema

const FeedSchema = new Schema({
    userName: {
        type: String,
        required: true
    },
    comment: {
        type: String,
    },
    tags: {
        type: Array,
    }, 
    image: {
        type: String,
    }, 
    likes: {
        type: Number,
        default: 0 // if we don't put defaut the likes won't exist
    },
    shares: {
        type: Number,
        default: 0
    },
    date : {
        type: Date,
        default: Date.now
    },
})


// Step 3. Export the schema as a model
module.exports = Feed = mongoose.model('feed', FeedSchema);

// Step 4. Import Feed.js into server.js

// Step 5. Create a post route for '/feed'

// Step 6. Save the post to the database

