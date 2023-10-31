import { BaseEntity } from "src/common/base.entity";
import { Asistente } from "src/modulos/asistente/entities/asistente.entity";
import { Evento } from "src/modulos/evento/entities/evento.entity";
import { Column, Entity, ManyToOne } from "typeorm";

@Entity()
export class Registro extends BaseEntity {
    @ManyToOne(type=>Evento, evento=>evento.registros)
    evento:Evento
    @ManyToOne(type=>Asistente, asistente=>asistente)
    asistente:Asistente
    @Column({type:"date"})
    fecha:Date
}
