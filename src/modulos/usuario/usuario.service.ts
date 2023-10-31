import { HttpCode, HttpStatus, Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { Repository } from 'typeorm';

@Injectable()

export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private repositoryUsuario: Repository<Usuario>
  ) { }

  create(createUsuarioDto: CreateUsuarioDto) {
    return 'This action adds a new usuario';
  }

  findAll() {
    return `This action returns all usuario`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usuario`;
  }

  async findOneByDNI(dni: string) {
    const user = await this.repositoryUsuario.findOneBy({ numero_documento: dni })
    if (user) {
      return {
        status: HttpStatus.FOUND,
        data: user,
        message: 'Obtenido desde la BD'
      }
    }
    else {
      const response = await fetch(`https://www.consultarucsunat.com/api_empresas.php?op=consulta&documento=${dni}&tipo=D&origen=2`)
      const person = await response.json()
      if (person) {
        return {
          status: HttpStatus.FOUND,
          data: {
            apellido_paterno: person.paterno,
            apellido_materno: person.materno,
            nombres: person.nombre,
            numero_documento: person.dni
          },
          message: 'Obtenido desde la RENIEC'
        }
      }
      else {
        return {
          status: HttpStatus.NOT_FOUND,
          data: 'No data',
          message: 'No se encuentra registrado en la BD ni en la RENIEC'
        }
      }
    }
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return `This action updates a #${id} usuario`;
  }

  remove(id: number) {
    return `This action removes a #${id} usuario`;
  }
}
