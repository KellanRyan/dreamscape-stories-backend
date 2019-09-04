"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
const common_1 = require("@nestjs/common");
const create_post_dto_1 = require("./dto/create-post.dto");
const posts_service_1 = require("./posts.service");
let postsController = class postsController {
    constructor(postsService) {
        this.postsService = postsService;
    }
    async create(createpostDto) {
        return this.postsService.create(createpostDto);
    }
    async findAll() {
        return this.postsService.findAll();
    }
    async delete(id) {
        return this.postsService.delete(id);
    }
};
__decorate([
    common_1.Post('post'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof create_post_dto_1.CreatepostDto !== "undefined" && create_post_dto_1.CreatepostDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], postsController.prototype, "create", null);
__decorate([
    common_1.Get('posts'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], postsController.prototype, "findAll", null);
__decorate([
    common_1.Delete('id'),
    __param(0, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], postsController.prototype, "delete", null);
postsController = __decorate([
    common_1.Controller('posts'),
    __metadata("design:paramtypes", [posts_service_1.postsService])
], postsController);
exports.postsController = postsController;
//# sourceMappingURL=posts.controller.js.map