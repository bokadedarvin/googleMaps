import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Unique } from 'typeorm';

@Entity()
export class History {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ 
        length: 100,
        nullable: false, 
    })
    startPoint:string;
    
    @Column({ 
        length: 100,
        nullable: false, 
    })
    destinationPoint:string;

    @Column({ 
        length: 100,
        nullable: false, 
    })
    type:string;

    @Column('longtext', {
        nullable: false,
    })
    searchedArea: string;

    @Column({ 
        length: 100,
        nullable: false, 
    })
    userId:string;
}