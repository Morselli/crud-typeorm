import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { DB_CONFIG } from "../helpers/constants"
import { UsersTable1666920580953 } from "./migration/1666920580953-UsersTable"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: DB_CONFIG.username,
    password: DB_CONFIG.password,
    database: DB_CONFIG.database,
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [UsersTable1666920580953],
    subscribers: [],
})
