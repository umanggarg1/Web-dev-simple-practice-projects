"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupInput = exports.updateBlogInput = exports.createBlogInput = exports.signinInput = void 0;
const zod_1 = require("zod");
// ✅ Signin schema
exports.signinInput = zod_1.z.object({
    username: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
});
// ✅ Create blog schema
exports.createBlogInput = zod_1.z.object({
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
// ✅ Update blog schema
exports.updateBlogInput = zod_1.z.object({
    id: zod_1.z.number(),
    title: zod_1.z.string(),
    content: zod_1.z.string(),
});
// ✅ Signup schema (you referenced signupInput type but forgot to define it)
exports.signupInput = zod_1.z.object({
    username: zod_1.z.string(),
    password: zod_1.z.string().min(6),
    name: zod_1.z.string().optional(),
});
//# sourceMappingURL=index.js.map