import { Module } from '@nestjs/common';
import { UserModule } from './user/users.module';

@Module({
  imports: [UserModule],
})
export class AppModule {}
