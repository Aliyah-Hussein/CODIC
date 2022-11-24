SELECT * FROM mydatabase.answer;
const { createPool } = require('mysql');

const pool = createPool({
    host: "localhost",
    user:"root",
    password: "avishek",
    database: "test",
    connectionLimit: 10
})

pool.query ('select * from question', (err, result, feilds)=> {
         if (err){
            return console.log(err);

         }

         return console.log(result);
})

pool.query ('select * from answer', (err, result, feilds)=> {
    if (err){
       return console.log(err);

    }

    return console.log(result);
})