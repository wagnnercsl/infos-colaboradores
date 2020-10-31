const fs = require('fs');
const fastcsv = require('fast-csv');
//db
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('src/database/database.sqlite');
//db

const stream = fs.createReadStream("src/database/arquivo_lanches.csv");
let csvData = [];

let csvStream = fastcsv
    .parse({delimiter: ';', skipRows:1})
    .on("data", (data) => {
        csvData.push(data);
    })
    .transform((row, next) => {

        return next(null, {
            identificador: row[0],
            nome_usuario: row[1],
            altura: row[2],
            lactose: row[3],
            peso: row[4],
            atleta: row[5]
        })
    })
    .on("end", (row) => {
        //database functions
        db.serialize(function() {
            db.run("DROP TABLE IF EXISTS colaboradores");
            db.run("CREATE TABLE IF NOT EXISTS colaboradores(identificador INT , nome_usuario TEXT, altura DOUBLE, lactose BOOLEAN, peso DOUBLE, atleta BOOLEAN)");
            csvData.forEach(newUser => {
                db.run("INSERT INTO colaboradores(identificador, nome_usuario, altura, lactose, peso, atleta) VALUES ($identificador, $nome_usuario, $altura, $lactose, $peso, $atleta)", 
                {
                    $identificador: newUser.identificador, 
                    $nome_usuario: newUser.nome_usuario,
                    $altura: newUser.altura,
                    $lactose: newUser.lactose,
                    $peso: newUser.peso,
                    $atleta: newUser.atleta,
                });
            })
        })
        db.close();
        console.log("Banco de dados criado com sucesso!");
        //end
    });

    stream.pipe(csvStream);