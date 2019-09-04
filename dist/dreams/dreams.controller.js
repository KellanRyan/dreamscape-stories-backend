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
const common_1 = require("@nestjs/common");
const create_dream_dto_1 = require("./dto/create-dream.dto");
const dreams_service_1 = require("./dreams.service");
const validate_object_id_pipes_1 = require("./shared/pipes/validate-object-id.pipes");
let DreamsController = class DreamsController {
    constructor(dreamsService) {
        this.dreamsService = dreamsService;
    }
    async create(createDreamDto) {
        return this.dreamsService.create(createDreamDto);
    }
    async findAll() {
        return this.dreamsService.findAll();
    }
    async deletedream(res, dreamID) {
        const deleteddream = await this.dreamsService.deletedream(dreamID);
        if (!deleteddream)
            throw new common_1.NotFoundException('dream does not exist!');
        return res.status(common_1.HttpStatus.OK).json({
            message: 'dream has been deleted!',
            dream: deleteddream
        });
    }
};
__decorate([
    common_1.Post(),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dream_dto_1.CreateDreamDto]),
    __metadata("design:returntype", Promise)
], DreamsController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DreamsController.prototype, "findAll", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Res()), __param(1, common_1.Query('dreamID', new validate_object_id_pipes_1.ValidateObjectId())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], DreamsController.prototype, "deletedream", null);
DreamsController = __decorate([
    common_1.Controller('dreams'),
    __metadata("design:paramtypes", [dreams_service_1.DreamsService])
], DreamsController);
exports.DreamsController = DreamsController;
//# sourceMappingURL=dreams.controller.js.map