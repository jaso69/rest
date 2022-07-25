


const Role = require('../models/role');
const User = require('../models/user');


const esRoleValid = async(role = '') =>{
    const existRole = await Role.findOne({role});
    if( !existRole ){
        throw new Error('El role es erroneo');
    }
}

const existEmail = async (email) =>{ 
    const existeEmail = await User.findOne({ email });
    if(existeEmail){
        throw new Error('Email ya esta registrado');
        };
    }

const existuserId = async (id) =>{ 
    const existeUser = await User.findById(id );
    if(!existeUser){
        throw new Error('id no valido');
        };
    }
    

module.exports = {
    esRoleValid,
    existEmail,
    existuserId
}