import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication) {
	const userApiOptions = new DocumentBuilder()
		.setTitle('User Api Doc')
		.setDescription('User Api Info')
		.setVersion('1.0')
		.addBearerAuth()
		.addTag('users')
		.build();

	SwaggerModule.setup('v1/api/', app, SwaggerModule.createDocument(app, userApiOptions));
}