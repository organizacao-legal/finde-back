export interface Reply {
    id: string,
    text: string,
    upvotes: number
    replies: Reply[]
}
