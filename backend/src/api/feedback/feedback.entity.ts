import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn } from 'typeorm';

@Entity()
export class Feedback {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        nullable: false,
    })
    name: string;

    @Column({
        length: 100,
        nullable: false,
    })
    email: string;

    @Column({
        length: 400,
        nullable: false,
    })
    description: string;

    @Column({
        nullable: false,
    })
    rating: number;
}
