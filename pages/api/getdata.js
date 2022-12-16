import mysql from 'mysql2/promise'

export default async function handler(req, res){ 

    const dbconnection = await mysql.createConnection({
        host: "localhost",
        database: "db_farm",
        // port: "3030",
        user: "root",
        password: "1234",
        socketPath: ""
    });

    try{

        const query = "SELECT * FROM users";
        const values = [];
        const [data] = await dbconnection.execute(query, values);
        dbconnection.end();

        res.status(200).json({ resules: data });
    }catch(error) {
        res.status(500).json({ error: error.message })
    }

    // res.status(200).json({ name: "Bandith Phusawat"});
}

