import "reflect-metadata";
import Mysql from './mysql.db';
import Postgresql from "./postgresql";
import {UserEntity} from "./user.entity";

async function testUpsert() {
	const dataSource =await Mysql; // NOT WORKING
	// const dataSource = await Postgresql; // WORKING

	const userRepository = dataSource.getRepository(UserEntity);

	const result = await userRepository.upsert({
		snsType: 'test',
		snsId: 'test',
		profileImg: 'test',
		nickname: 'test'
	}, ['snsType', 'snsId']);
	console.log(result);

}

testUpsert();
