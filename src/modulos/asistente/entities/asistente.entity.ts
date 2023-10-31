import { BaseEntity } from "src/common/base.entity";
import { Registro } from "src/modulos/registro/entities/registro.entity";
import { Usuario } from "src/modulos/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne } from "typeorm";

@Entity()
export class Asistente extends BaseEntity {
    @Column()
    entidad: string
    @Column()
    cargo: string
    @OneToOne(type => Usuario, usuario => usuario.asistente)
    @JoinColumn()
    usuario: Usuario
    @OneToMany(type => Registro, registro => registro.asistente)
    asistentes: Asistente[]
}
