import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Unique, OneToMany, ManyToMany } from 'typeorm';
import { Marker } from '../marker/marker.entity';

@Entity()
// @Unique(["from","to"])
export class Mapping {
    @PrimaryGeneratedColumn()
    id: number;
    @ManyToOne(type => Marker, marker => marker.id)
    @JoinColumn() // this decorator is optional for @ManyToOne, but required for @OneToOne
    from: Marker;
    @ManyToOne(type => Marker, marker => marker.id)
    @JoinColumn() // this decorator is optional for @ManyToOne, but required for @OneToOne
    to: Marker;
    @Column({
        nullable: false,
        type: "double",
    })
    pathCost: number;
    
}
