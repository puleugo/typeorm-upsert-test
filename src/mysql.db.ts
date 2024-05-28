import {DataSource} from "typeorm";
import {UserEntity} from "./user.entity";

export default new DataSource({
	type: "mysql",
	host: "localhost",
	port: 3300,
	username: "mysql",
	password: "mysql",
	database: "mysql",
	synchronize: true,
	logging: true,
	entities: [UserEntity],
}).initialize();
