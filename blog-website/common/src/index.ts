import { z } from 'zod';

// ✅ Signin schema
export const signinInput = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

// ✅ Create blog schema
export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
});

// ✅ Update blog schema
export const updateBlogInput = z.object({
  id: z.number(),
  title: z.string(),
  content: z.string(),
});

// ✅ Signup schema (you referenced signupInput type but forgot to define it)
export const signupInput = z.object({
  username: z.string(),
  password: z.string().min(6),
  name: z.string().optional(),
});

// ✅ Type inference
export type SignupInput = z.infer<typeof signupInput>;
export type SigninInput = z.infer<typeof signinInput>;
export type UpdateBlogInput = z.infer<typeof updateBlogInput>;
export type CreateBlogInput = z.infer<typeof createBlogInput>;