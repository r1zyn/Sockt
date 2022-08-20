"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
exports.env = global.process.env || {
	NODE_ENV: process.env.NODE_ENV,
	TZ: process.env.TZ,
	PORT: process.env.PORT
};
if (process.env.NODE_ENV !== "production") global.process.env = exports.env;
//# sourceMappingURL=env.js.map
