"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const koa_1 = tslib_1.__importDefault(require("koa"));
const app = new koa_1.default();
app.use((ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    ctx.body = 'Hello World';
}));
app.listen(3000);
