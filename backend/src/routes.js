const { Router } = require('express');
const path = require('path');
const sqlite3 = require('sqlite3');

let db = new sqlite3.Database(path.resolve(__dirname, '.', 'database/database.sqlite'), 
    sqlite3.OPEN_READONLY, (err) => {

    if(err) {
        console.log(err.message);
    }else {
        console.log('Conectado com sucesso!');
    }
});

const routes = Router();

routes.get('/', async(req, res) => {
        try {
        const sql = db.all(`SELECT * FROM colaboradores`, async (err, row) => {
            if(err){
                console.log(err.message);
            }

            return res.json(row);
        })
    } catch(err) {
        console.log(err.message);
    }
});

module.exports = routes;