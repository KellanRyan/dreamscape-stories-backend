"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const dreams_controller_1 = require("./dreams.controller");
describe('Dreams Controller', () => {
    let controller;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            controllers: [dreams_controller_1.DreamsController],
        }).compile();
        controller = module.get(dreams_controller_1.DreamsController);
    });
    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
//# sourceMappingURL=dreams.controller.spec.js.map