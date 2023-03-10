import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import * as mongoose from 'mongoose';

export type NoteDocument = mongoose.HydratedDocument<Note>

@Schema()
export class Note {
    @Prop()
    content: string;

    @Prop({ type: Date, expires: 86400, default: Date.now })
    created_at: Date;

    @Prop()
    upvotes: number;

    @Prop()
    replies: Note[]
}

export const NoteSchema = SchemaFactory.createForClass(Note);