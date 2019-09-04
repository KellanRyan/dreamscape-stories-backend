"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.DreamSchema = new mongoose.Schema({
    id: Number,
    user: String,
    content: String,
});
//# sourceMappingURL=dream.schema.js.map