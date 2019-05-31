var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var heroSchema = new Schema({
    itemName: {
        type: String,
        required: true
    },
    itemPrice: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    },
    itemDescription: {
        type: String,
        default: ''
    }
}, {
    timestamps: true
});

var Heroes = mongoose.model('Items', heroSchema);
module.exports = Heroes;