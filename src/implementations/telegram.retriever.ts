import { MessageRetriever } from '../abstractions/message.retriever';
import { ITelegramService } from '../interfaces/telegram.service.interface';

export class TelegramRetriever extends MessageRetriever {
  private telegramService: ITelegramService;

  constructor(telegramService: ITelegramService) {
    super();
    this.telegramService = telegramService;
  }

  async retrieveMessages(chatId: string, limit?: number): Promise<any[]> {
    // Use the Telegram service to retrieve messages
    const messages = await this.telegramService.getMessages(chatId, limit);
    return messages;
  }
}
