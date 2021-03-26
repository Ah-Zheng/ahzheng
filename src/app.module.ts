import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { PhotoModule } from './modules/photo/photo.module';

@Module({
	imports: [
		ServeStaticModule.forRoot({
			rootPath: join(__dirname, '../../public', 'three-kingdoms'),
		}),
		PhotoModule
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
