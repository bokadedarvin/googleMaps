// export class User.Entity {}
import { Entity, Column, PrimaryGeneratedColumn, } from 'typeorm';
@Entity()
export class User  {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ 
        length: 100,
        nullable: false, 
    })
    name:string;

    @Column({ 
        length: 100,
        nullable: false, 
    })
    email:string;

    @Column('longtext', {
        nullable: false,
    })
    password: string;
    
    @Column('date') 
    birthday:Date;
    
    @Column() 
    isActive:boolean;
}