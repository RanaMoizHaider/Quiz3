const mongoose = require('mongoose');

const allUrlSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

const AllUrls = new mongoose.model("ALLURLS", allUrlSchema);

module.exports = AllUrls;