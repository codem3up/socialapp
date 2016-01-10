var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    created: { type: Date, default: Date.now },

})

module.exports = mongoose.model('User', userSchema);
