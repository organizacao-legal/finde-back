import { IsString } from "class-validator"

export class EditNoteDTO {
    @IsString()
    reply: string
}