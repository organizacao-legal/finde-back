import { IsString } from 'class-validator';
import { Note } from '../schemas/note.schema';

export class CreateNoteDTO {
  @IsString()
  content: string;
}

export function newNote(createNoteDTO: CreateNoteDTO): Note {
  return {
    content: createNoteDTO.content,
    created_at: Date.now(),
    upvotes: 0,
    replies: [],
  };
}
