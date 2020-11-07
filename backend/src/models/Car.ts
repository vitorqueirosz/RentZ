import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import Brand from './Brand';
import Rent from './Rent';

@Entity('cars')
class Car {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    brand_id: string;

    @Column()
    transmission: string;

    @Column()
    type: string;

    @Column()
    kms: string;

    @Column()
    image: string;

    @Column()
    price: number;

    @Column()
    seats: number;

    @Column()
    category: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Brand, brand => brand.cars)
    @JoinColumn({ name: 'brand_id' })
    brand: Brand;

    @OneToOne(() => Rent, rent => rent.car)
    rent: Rent;
}

export default Car;
