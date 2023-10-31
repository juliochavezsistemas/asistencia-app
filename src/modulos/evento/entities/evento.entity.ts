import { BaseEntity } from "src/common/base.entity";
import { Registro } from "src/modulos/registro/entities/registro.entity";
import { TipoEvento } from "src/modulos/tipo-evento/entities/tipo-evento.entity";
import { Column, Entity, ManyToOne, OneToMany } from "typeorm";

@Entity()
export class Evento extends BaseEntity {
    @Column({ unique: true })
    nombre: string
    @Column()
    descripcion: string
    @Column({ type: "date" })
    fecha_inicio: Date
    @Column({ type: "date" })
    fecha_fin: Date
    @ManyToOne(type => TipoEvento, tipoEvento => tipoEvento.eventos)
    tipo_evento: TipoEvento
    @OneToMany(type=>Registro, registro=>registro.evento)
    registros:Registro[]
}
