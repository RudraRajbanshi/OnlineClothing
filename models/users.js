var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let User = new Schema({
    admin: {
        type: Boolean,
        default: false
    },
    userFname: {
        type: String,
        default: ''
    },
    userLname: {
        type: String,
        default: ''
    },
});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('Users', User);