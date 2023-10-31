import { BaseEntity } from "src/common/base.entity"
import { Evento } from "src/modulos/evento/entities/evento.entity"
import { Column, Entity, OneToMany } from "typeorm"

@Entity()
export class TipoEvento extends BaseEntity {
    @Column({ unique: true })
    nombre: string
    @Column({ nullable: true })
    descripcion: string
    @OneToMany(type => Evento, evento => evento.tipo_evento)
    eventos: Evento[]
}
