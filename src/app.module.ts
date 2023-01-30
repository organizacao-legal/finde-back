import { Module } from '@nestjs/common';
import { NotesModule } from './notes/notes.modules';

@Module({
  imports: [NotesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
