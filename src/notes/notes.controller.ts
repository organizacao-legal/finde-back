import { BadRequestException, Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post, Put } from '@nestjs/common';
import { CreateNoteDTO } from './dto/create-note.dto';
import { EditNoteDTO } from './dto/edit-note.dto';
import { Note } from './interfaces/note.interface';
import { NotesService } from './notes.service';

@Controller('notes')
export class NotesController {
  constructor(private notesService: NotesService) {}

  @Get()
  async findAll(): Promise<Note[]> {
    return this.notesService.findAll();
  }

  @Get(':id')
  async findOnde(@Param('id', new ParseUUIDPipe()) id: string): Promise<Note> {
    var note = this.notesService.findOne(id);

    if(note == null) {
        throw new BadRequestException('Could not find a note with this id')
    }

    return note;
  }

  @Post()
  async create(@Body() createNoteDTO: CreateNoteDTO) {
    this.notesService.create(createNoteDTO);
  }

  @Put(':id')
  async update(@Param('id', new ParseUUIDPipe()) id: string, @Body() editNoteDto: EditNoteDTO) {
    var note = this.notesService.findOne(id);

    if(note == null) {
        throw new BadRequestException('Could not find a note with this id')
    }

    this.notesService.addReply(id, editNoteDto);
  }
}
