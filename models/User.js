const {Schema, model} = require('mongoose')
const schema = new Schema({
    Login: {type: String, required: true, unique: false},
    Password: {type: Number, required: true, unique: false}
})
module.exports = model('User', schema)