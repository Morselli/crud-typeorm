import { AppDataSource } from "./database/data-source"
import express = require('express')

AppDataSource.initialize().then(async () => {

    const app = express()
    const port = 3000

    app.use(express.json())

    //app.use('/api/v1', router)

    app.listen(port, () => console.log(`Server listening on port ${port}`))

}).catch(error => console.log(error))
