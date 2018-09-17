const mongoose = require('mongoose');
const axios = require('axios');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    gender: {
        type : String
    }
})

userSchema.pre('save',function(next){
    let user = this;
    if(!user.gender){
        axios.get(`https://gender-api.com/get?name=${user.name}&key=wubmUMBbjXXCSpQrnP`)
        .then(function(response) {
            user.gender = response.data.gender;
            next();
        })
        .catch(function(err) {
            return Promise.reject(err);
        })
    }
})

const User = mongoose.model('User',userSchema);

module.exports = { User }