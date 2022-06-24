export interface IMessage {
    conversationId ?: string,
    senderId : string,
    messages : string,
    createdAt ?: Date;
    updateAt ?: Date;
}