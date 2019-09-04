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
const posts_module_1 = require("./posts/posts.module");
const app_controller_1 = require("./app.controller");
const posts_controller_spec_1 = require("./posts/posts.controller.spec");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
const dreams_controller_1 = require("./dreams/dreams.controller");
const dreams_module_1 = require("./dreams/dreams.module");
const keys_1 = require("./config/keys");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            mongoose_1.MongooseModule.forRoot(keys_1.default.mongoURI, { useNewUrlParser: true }),
            posts_module_1.postsModule,
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            dreams_module_1.DreamsModule,
        ],
        controllers: [
            app_controller_1.AppController,
            posts_controller_spec_1.postsController,
            dreams_controller_1.DreamsController,
        ],
        providers: [
            app_service_1.AppService,
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map