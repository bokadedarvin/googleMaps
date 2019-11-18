import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { Type } from '../type/type.entity';

@Entity()
@Unique(["name"])
export class Marker {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        nullable: false,
    })
    name: string;

    @Column({
        length: 400,
        nullable: false,
    })
    description: string;

    @Column({
        nullable: false,
        type: "double",
    })
    lat: number;

    @Column({
        nullable: false,
        type: "double",
    })
    long: number; 

    @Column({
        nullable: false,
        type: "boolean",
    })
    WheelChair: boolean; 

    @ManyToOne(type => Type, type => type.id)
    @JoinColumn() // this decorator is optional for @ManyToOne, but required for @OneToOne
    Type: Type;
}
