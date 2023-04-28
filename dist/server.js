"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const app_1 = __importDefault(require("./app"));
dotenv_1.default.config();
const port = process.env.PORT || 3000;
app_1.default.use(express_1.default.json());
app_1.default.use((0, cors_1.default)());
app_1.default.get('/', (req, res) => {
    res.send('Hello Wsadsds!');
});
app_1.default.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
