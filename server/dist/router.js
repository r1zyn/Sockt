"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get("/", (_req, res) => {
    res.send({
        status: res.statusCode,
        message: "Server is online",
        port: process.env.PORT || 3000
    });
});
exports.default = router;
//# sourceMappingURL=router.js.map