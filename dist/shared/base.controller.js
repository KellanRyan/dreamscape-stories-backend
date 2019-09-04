"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const secretkey_1 = require("../config/secretkey");
const jwt = require("jsonwebtoken");
class BaseController {
    constructor() { }
    getUserIdFromToken(authorization) {
        if (!authorization)
            return null;
        const token = authorization.split(' ')[1];
        const decoded = jwt.verify(token, secretkey_1.SECRET);
        return decoded.id;
    }
}
exports.BaseController = BaseController;
//# sourceMappingURL=base.controller.js.map