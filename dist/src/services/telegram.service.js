"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TelegramService = void 0;
const node_telegram_bot_api_1 = __importDefault(require("node-telegram-bot-api"));
class TelegramService {
    constructor(token) {
        this.bot = new node_telegram_bot_api_1.default(token, { polling: false });
    }
    getMessages(chatId, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            // Retrieve messages from the Telegram chat using the bot API
            // Note: The Telegram Bot API does not provide a direct method to retrieve messages from a chat.
            // You may need to use a different approach or library to achieve this functionality.
            // This is a placeholder implementation.
            return [];
        });
    }
}
exports.TelegramService = TelegramService;
