import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, ManyToOne, Unique } from 'typeorm';
import { Marker } from '../marker/marker.entity';

@Entity()
export class Mapping {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        length: 100,
        nullable: false,
    })
    from: string;

    @Column({
        length: 400,
        nullable: false,
    })
    mappingplace: string;

    @ManyToOne(type => Marker, type => type.id)
    @JoinColumn() // this decorator is optional for @ManyToOne, but required for @OneToOne
    Type: Marker;
}
