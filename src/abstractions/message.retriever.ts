// abstractions/message.retriever.ts
export abstract class MessageRetriever {
    abstract retrieveMessages(chatId: string, limit?: number): Promise<any[]>;
  }
  