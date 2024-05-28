import {DataSource} from "typeorm";
import {UserEntity} from "./user.entity";

export default new DataSource({
	type: "postgres",
	host: "localhost",
	port: 5430,
	database: "postgres",
	username: "postgres",
	password: "postgres",
	logging: true,
	entities: [UserEntity],
	synchronize: true,
}).initialize();
