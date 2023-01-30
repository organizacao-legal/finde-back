import { Reply } from "./reply.interface"

export interface Note {
    id: string 
    content: string
    created_at: number
    upvotes: number
    replies: Reply[]
}
