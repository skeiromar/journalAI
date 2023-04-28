"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messages_1 = __importDefault(require("./src/routes/messages"));
// import searchRouter from './routes/search';
const app = (0, express_1.default)();
app.use('/messages', messages_1.default);
// app.use('/search', searchRouter);
exports.default = app;
