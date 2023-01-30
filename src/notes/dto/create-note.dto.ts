import { IsString } from "class-validator"

export class CreateNoteDTO {
    @IsString()
    content: string
}