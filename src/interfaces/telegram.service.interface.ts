export interface ITelegramService {
    getMessages(chatId: string, limit?: number): Promise<any[]>;
  }
  