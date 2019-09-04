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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const class_validator_1 = require("class-validator");
const crypto = require("crypto");
const post_entity_1 = require("../posts/post.entity");
let UserEntity = class UserEntity {
    hashPassword() {
        this.password = crypto.createHmac('sha256', this.password).digest('hex');
    }
};
__decorate([
    mongoose_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    mongoose_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    mongoose_1.Column(),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    mongoose_1.Column({ default: '' }),
    __metadata("design:type", String)
], UserEntity.prototype, "bio", void 0);
__decorate([
    mongoose_1.Column({ default: '' }),
    __metadata("design:type", String)
], UserEntity.prototype, "image", void 0);
__decorate([
    mongoose_1.Column(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    mongoose_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserEntity.prototype, "hashPassword", null);
__decorate([
    mongoose_1.ManyToMany(type => post_entity_1.postEntity),
    mongoose_1.JoinTable(),
    __metadata("design:type", Array)
], UserEntity.prototype, "favorites", void 0);
__decorate([
    mongoose_1.OneToMany(type => post_entity_1.postEntity, post => post.author),
    __metadata("design:type", Array)
], UserEntity.prototype, "posts", void 0);
UserEntity = __decorate([
    mongoose_1.Entity('user')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map