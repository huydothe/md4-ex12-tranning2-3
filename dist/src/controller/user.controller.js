"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const user_model_1 = require("../model/user.model");
const createUser = async (req, res, next) => {
    try {
        const userNew = new user_model_1.UserModel(req.body);
        await userNew.save();
        res.status(200).json({ username: userNew.username });
    }
    catch (err) {
        next(err);
    }
};
exports.createUser = createUser;
//# sourceMappingURL=user.controller.js.map