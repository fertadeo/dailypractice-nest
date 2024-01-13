

import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombreCliente: string;

    @Column()
    direccionCliente: string;

    @Column()
    telefonoCliente: string;
}
