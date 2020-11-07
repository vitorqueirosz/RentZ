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
import Car from './Car';

import User from './User';

@Entity('rents')
class Rent {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    user_id: string;

    @Column()
    car_id: string;

    @Column()
    from: Date;

    @Column()
    to: Date;

    @Column()
    request_time: number;

    @Column()
    return_time: number;

    @Column()
    total_price: number;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToOne(() => User, user => user.rents)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @OneToOne(() => Car, car => car.rent)
    @JoinColumn({ name: 'car_id' })
    car: Car;
}

export default Rent;
