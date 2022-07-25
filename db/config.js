

const mongoose = require('mongoose');


const dbconx = async() => {

    try {

        await mongoose.connect(process.env.DBCONX, {
            useNewUrlParser: true,
            useUnifiedTopology: true,       
        });

        console.log("Conexion DB")

    } catch(error) {
        console.log(error);
        throw new Error('Error de conexión DB')
    }

}



module.exports = {
    dbconx
}