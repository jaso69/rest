


const {Schema, model} = require('mongoose');


const userSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatario']
    },
    email: {
        type: String,
        required: [true, 'El email es obligatario'],
        unique: true
    },
    passw: {
        type: String,
        required: [true, 'El passw es obligatario'],
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        enum: ['ADMIN_ROLE','USER_ROLE']
    },
    estado: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
});

userSchema.methods.toJSON = function(){
    const { __v, passw, ...user} = this.toObject();
    return user;
}



module.exports = model( 'User', userSchema);