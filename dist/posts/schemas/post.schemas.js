"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.postSchema = new mongoose.Schema({
    id: Number,
    user: String,
    content: String,
});
//# sourceMappingURL=post.schemas.js.map