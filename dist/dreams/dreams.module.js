"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const dreams_controller_1 = require("./dreams.controller");
const dream_schema_1 = require("./schemas/dream.schema");
const dreams_service_1 = require("./dreams.service");
const common_2 = require("@nestjs/common");
let DreamsModule = class DreamsModule {
};
DreamsModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: 'dream', schema: dream_schema_1.DreamSchema }]),
            common_2.HttpModule,
        ],
        controllers: [dreams_controller_1.DreamsController],
        exports: [dreams_service_1.DreamsService],
        providers: [dreams_service_1.DreamsService]
    })
], DreamsModule);
exports.DreamsModule = DreamsModule;
//# sourceMappingURL=dreams.module.js.map