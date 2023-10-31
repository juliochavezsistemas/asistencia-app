import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RolModule } from './modulos/rol/rol.module';
import { TipoDocumentoModule } from './modulos/tipo-documento/tipo-documento.module';
import { TipoEventoModule } from './modulos/tipo-evento/tipo-evento.module';
import { EventoModule } from './modulos/evento/evento.module';
import { RegistroModule } from './modulos/registro/registro.module';
import { UsuarioModule } from './modulos/usuario/usuario.module';
import { AsistenteModule } from './modulos/asistente/asistente.module';
import { AuthModule } from './modulos/auth/auth.module';
import { JwtModule } from './modulos/jwt/jwt.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    RolModule,
    TipoDocumentoModule,
    TipoEventoModule,
    EventoModule,
    RegistroModule,
    UsuarioModule,
    AsistenteModule,
    AuthModule,
    JwtModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5439,
      password: 'password',
      username: 'root',
      database: 'asistencia_app',
      synchronize: true,
      autoLoadEntities: true,
      logging: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
