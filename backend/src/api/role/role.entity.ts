import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ 
        length: 100,
        nullable: false, 
    })
    roleName:string;
    
    @Column({ nullable: false, default: true })
    isActive:boolean;
}