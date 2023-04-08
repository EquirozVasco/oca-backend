import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    BaseEntity
} from 'typeorm';

@Entity()
export class Question extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    statement: string;

    @Column()
    answerOption1: string;

    @Column()
    answerOption2: string;

    @Column()
    answerOption3: string;

    @Column()
    correctAnswer: string;

    @Column()
    topic: string;

    @Column()
    subject: string;

    @Column()
    difficulty: string;

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