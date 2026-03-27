import { Module } from '@nestjs/common'
import { CqrsModule } from '@nestjs/cqrs'
import { CommandHandlers, QueryHandlers, EventHandlers, Adapters } from './parser.providers'
import { UserController } from './entrypoints/user.controller'
import { AdminController } from './entrypoints/admin.controller'
import { DatabaseModule } from '../database/database.module'

@Module({
  imports: [CqrsModule, DatabaseModule],
  controllers: [UserController, AdminController],
  providers: [...CommandHandlers, ...QueryHandlers, ...EventHandlers, ...Adapters],
})
export class ParserModule {}