import { BaseEntity } from "src/common/base.entity"
import { Asistente } from "src/modulos/asistente/entities/asistente.entity"
import { Rol } from "src/modulos/rol/entities/rol.entity"
import { TipoDocumento } from "src/modulos/tipo-documento/entities/tipo-documento.entity"
import { Column, Entity, ManyToOne, OneToOne } from "typeorm"

@Entity()
export class Usuario extends BaseEntity {
    @Column()
    apellido_paterno: string
    @Column()
    apellido_materno: string
    @Column()
    nombres: string
    @ManyToOne(type => TipoDocumento, tipoDocumento => tipoDocumento.usuarios)
    tipo_documento: TipoDocumento
    @Column({ unique: true })
    numero_documento: string
    @Column()
    password: string
    @ManyToOne(type => Rol, tipoDocumento => tipoDocumento.usuarios)
    rol: Rol
    @OneToOne(type => Asistente, asistente => asistente.usuario)
    asistente: Asistente
}
