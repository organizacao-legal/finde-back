import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CreateNoteDTO } from './dto/create-note.dto';
import { EditNoteDTO } from './dto/edit-note.dto';
import { Note } from './interfaces/note.interface';
import { Reply } from './interfaces/reply.interface';

@Injectable()
export class NotesService {
  private readonly notes: Note[] = [];

  create(createNoteDTO: CreateNoteDTO) {
    const note = {
      id: randomUUID(),
      content: createNoteDTO.content,
      created_at: Date.now(),
      upvotes: 0,
      replies: [],
    };

    this.notes.push(note);
  }

  findAll(): Note[] {
    return this.notes;
  }

  findOne(noteId: string): Note {
    return this.notes.find((note) => note.id == noteId);
  }

  addReply(noteId: string, editNoteDto: EditNoteDTO) {
    const reply = {
      id: randomUUID(),
      text: editNoteDto.reply,
      upvotes: 0,
      replies: [],
    };

    var foundIndext = this.notes.findIndex((note) => note.id == noteId);
    this.notes[foundIndext].replies.push(reply);
  }
}
