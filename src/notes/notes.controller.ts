import { BadRequestException, Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateNoteDTO } from './dto/create-note.dto';
import { Note } from './schemas/note.schema';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  async findAll(): Promise<Note[]> {
    return this.notesService.findAll();
  }

  @Get(':id')
  async findOnde(@Param('id') id: string): Promise<Note> {
    var note = this.notesService.findOne(id);

    if(note == null) {
        throw new BadRequestException('Could not find a note with this id')
    }
    return note;
  }

  @Post()
  async create(@Body() createNoteDTO: CreateNoteDTO): Promise<Note> {
    return this.notesService.create(createNoteDTO);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() createNoteDTO: CreateNoteDTO) {
    var note = this.notesService.findOne(id);

    if(note == null) {
        throw new BadRequestException('Could not find a note with this id')
    }

    this.notesService.addReply(id, createNoteDTO);
  }
}
