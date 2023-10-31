import { Module } from '@nestjs/common';
import { RegistroService } from './registro.service';
import { RegistroController } from './registro.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Registro } from './entities/registro.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Registro])],
  controllers: [RegistroController],
  providers: [RegistroService],
})
export class RegistroModule {}
