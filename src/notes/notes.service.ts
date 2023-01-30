import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateNoteDTO, newNote } from './dto/create-note.dto';
import { Note, NoteDocument } from './schemas/note.schema';
import { Model } from 'mongoose';

@Injectable()
export class NotesService {
  constructor(@InjectModel(Note.name) private noteModel: Model<NoteDocument>) {}

  async create(createNoteDTO: CreateNoteDTO): Promise<Note> {
    const note = newNote(createNoteDTO)
    const createdNote = new this.noteModel(note)

    return createdNote.save()
  }

  async findAll(): Promise<Note[]> {
    return this.noteModel.find().exec()
  }

  async findOne(noteId: string): Promise<Note> {
    return this.noteModel.findById(noteId).exec();
  }

  async addReply(noteId: string, createNoteDTO: CreateNoteDTO) : Promise<Note>{
    const reply = newNote(createNoteDTO)
    // let note = (await this.noteModel.findById(noteId).exec())

    return this.noteModel.findByIdAndUpdate(noteId, {
       $push: {replies: reply}
    })
  }

}
