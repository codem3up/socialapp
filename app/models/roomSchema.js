var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var roomSchema = new Schema({
    name: { type: String, required: true, index: { unique: true } },
    owner: { type: String, required: true, index: { unique: true } },
    users: [],
    messages: [],
    created: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Room', roomSchema);
