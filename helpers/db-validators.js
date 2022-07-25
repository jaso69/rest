


const Role = require('../models/role');


const esRoleValid = async(role = '') =>{
    const existRole = await Role.findOne({role});
    if( !existRole ){
        throw new Error('El role es erroneo');
    }
}

module.exports = {
    esRoleValid
}