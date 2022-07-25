

const express = require('express')

const cors = require('cors')

const { dbconx } = require('../db/config')

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.routesUser = '/api/users'

        this.conxDB();

        this.middlewares();

        this.routes();
    }

    async conxDB(){

        await dbconx();
    }

    middlewares() {

        this.app.use( cors() );

        this.app.use( express.json() );

        this.app.use( express.static('public'));
    }

    routes(){

        this.app.use(this.routesUser, require('../routes/user'))
    }

    start() {
        this.app.listen(this.port, () => {
            console.log('Servidor en puerto: ', this.port)
          })
    }
}


module.exports = Server;