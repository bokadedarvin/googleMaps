import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { Role } from '../role/role.entity';

@Entity()
@Unique(["email"])
@Unique(["firstName","lastName", "email"])
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ 
        length: 100,
        nullable: false, 
    })
    firstName:string;
    
    @Column({ 
        length: 100,
        nullable: false, 
    })
    lastName:string;

    @Column({ 
        length: 100,
        nullable: false, 
    })
    email:string;

    @Column('longtext', {
        nullable: false,
    })
    password: string;
    
    @Column({ nullable: false, default: true })
    isActive:boolean;

    @ManyToOne(type => Role, role => role.id)
    @JoinColumn() // this decorator is optional for @ManyToOne, but required for @OneToOne
    Role: Role;
}