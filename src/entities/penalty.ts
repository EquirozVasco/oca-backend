import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity
} from 'typeorm';

@Entity()
export class Penalty extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    code: string;

    @Column()
    description: string;

    @Column()
    assignedDifficulty: string;

    @Column({
        default: true
    })
    active: boolean;

    @Column({
        default: false
    })
    isDefault: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}