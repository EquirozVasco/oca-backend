import { DataSource } from "typeorm";
import {Question} from './entities/questions'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin123",
    database: "oca-game",
    synchronize: true,
    entities: [
        Question
    ]
})