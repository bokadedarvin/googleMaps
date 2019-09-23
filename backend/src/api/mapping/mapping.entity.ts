import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Unique, OneToMany, ManyToMany } from 'typeorm';
import { Marker } from '../marker/marker.entity';

@Entity()
// @Unique(["from","to"])
export class Mapping {
    @PrimaryGeneratedColumn()
    id: number;

    // @Column({
    //     nullable: false,
    // })
    // from: number;

    // @Column({
    //     nullable: false,
    // })
    // to: number;

    @ManyToMany(type => Marker)
    @JoinColumn({
        name: "from",
        referencedColumnName: "id"
    }) // this decorator is optional for @ManyToOne, but required for @OneToOne
    From: Marker;

    @ManyToMany(type => Marker)
    @JoinColumn({
        name: "to",
        referencedColumnName: "id"
    }) // this decorator is optional for @ManyToOne, but required for @OneToOne
    To: Marker;
}
