import {Column, Entity, PrimaryGeneratedColumn, Unique} from "typeorm";

@Entity({ name: 'wt_user' })
@Unique(['snsType', 'snsId'])
export class UserEntity {
	@PrimaryGeneratedColumn('increment', {name: 'ID'})
	id: number;

	@Column({name: 'NICKNAME', default: null})
	nickname: string;

	@Column({name: 'SNS_TYPE', default: null})
	snsType: string;

	@Column({name: 'SNS_ID', default: null,})
	snsId: string;

	@Column({name: 'PROFILE_IMG', default: null})
	profileImg: string;

}
