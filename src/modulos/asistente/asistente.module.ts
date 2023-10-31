import { Module } from '@nestjs/common';
import { AsistenteService } from './asistente.service';
import { AsistenteController } from './asistente.controller';
import { Asistente } from './entities/asistente.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Asistente])],
  controllers: [AsistenteController],
  providers: [AsistenteService],
})
export class AsistenteModule {}
