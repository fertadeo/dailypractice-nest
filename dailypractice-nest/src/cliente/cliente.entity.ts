

import { Repartidor } from 'src/repartidor/repartidor.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class Cliente {
    [x: string]: any;
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombreCliente: string;

    @Column()
    direccionCliente: string;

    @Column()
    telefonoCliente: string;

    @ManyToOne(() => Repartidor, repartidor => repartidor.clientes)
    repartidor: Repartidor;
}
