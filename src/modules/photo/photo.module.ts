import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database.module';
import { photoProviders } from './photo.privaders';
import { PhotoService } from './photo.service';

@Module({
	imports: [DatabaseModule],
	providers: [
		...photoProviders,
		PhotoService
	]
})

export class PhotoModule {}
