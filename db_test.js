import pg from 'pg'

 
const connectDb = async () => {
    try {
        const pool = new pg.Pool({
            max: 10, // default
            connectionString: "postgres://postgres:NYWjusyncFbUCkq6@localhost:5433/auth",
        })

        await pool.connect()
        const sql = `CALL reset_password(5, 'Zz123456');`
		const query_res = await pool.query(sql)

        console.log(query_res)
        await pool.end()
    } catch (error) {
        console.log(error)
    }
}
 
connectDb()