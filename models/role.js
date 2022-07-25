


const { Schema, model} = require('mongoose');

const RoleScheama = Schema({
    role:{
        type: String,
        required: [true, 'El rol es obligatorio']
    }
})


module.exports = model( 'role', RoleScheama);