import { IsNumber, IsString } from 'class-validator';
import { Note } from '../schemas/note.schema';

export class CreateNoteDTO {
  @IsString()
  content: string;

  @IsNumber()
  upvote: number
}

export function newNote(createNoteDTO: CreateNoteDTO): Note {
  return {
    content: createNoteDTO.content,
    created_at: Date.now(),
    upvotes: 0,
    replies: [],
  };
}
