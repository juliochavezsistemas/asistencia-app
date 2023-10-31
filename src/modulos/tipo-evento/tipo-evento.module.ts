import { Module } from '@nestjs/common';
import { TipoEventoService } from './tipo-evento.service';
import { TipoEventoController } from './tipo-evento.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoEvento } from './entities/tipo-evento.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TipoEvento])],
  controllers: [TipoEventoController],
  providers: [TipoEventoService],
})
export class TipoEventoModule { }
