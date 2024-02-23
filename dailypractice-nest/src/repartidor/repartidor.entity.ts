// En repartidor.entity.ts
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Cliente } from '../cliente/cliente.entity';

@Entity()
export class Repartidor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  telefono: string;

  @OneToMany(() => Cliente, cliente => cliente.repartidor)
  clientes: Cliente[];
}
