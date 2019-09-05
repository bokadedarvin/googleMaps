import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Unique } from 'typeorm'; 

@Entity()
@Unique(["name"]) 
export class Type {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ 
        length: 100,
        nullable: false, 
    })
    name:string;

    @Column({
        length: 400,
        nullable: false,
    })
    description: string; 

    @Column({
        length: 100,
        nullable: false,
    })
    icon: string;  
}