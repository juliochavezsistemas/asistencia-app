import { BaseEntity } from "src/common/base.entity"
import { Usuario } from "src/modulos/usuario/entities/usuario.entity"
import { Column, Entity, OneToMany } from "typeorm"

@Entity()
export class TipoDocumento extends BaseEntity {
    @Column({ unique: true })
    nombre: string
    @Column({ nullable: true })
    descripcion: string
    @OneToMany(type => Usuario, usuario => usuario.tipo_documento)
    usuarios: Usuario[]
}
