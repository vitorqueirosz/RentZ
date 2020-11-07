import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    OneToMany,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
} from 'typeorm';
import Rent from './Rent';

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column({ unique: true })
    cpf: string;

    @Column()
    avatar: string;

    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Column()
    level: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @OneToMany(() => Rent, rent => rent.user)
    @JoinColumn({ name: 'id' })
    rents: Rent[];
}

export default User;
