var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: { type: String, required: true, index: { unique: true } },
    password: { type: String, required: true },
    username: { type: String },
    created: { type: Date, default: Date.now },
    role: { type: Number, default: 0 }
})

module.exports = mongoose.model('User', userSchema);
