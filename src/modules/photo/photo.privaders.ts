import { Connection, Repository } from 'typeorm';
import { Photo } from './photo.entity';

export const photoProviders = [
	{
		provide: 'PHOTO_REPOSITORY',
		useFactory: (connection: Connection) => connection.getRepository(Photo),
		inject: ['DATABASE_CONNECTION']
	}
]