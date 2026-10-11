import * as z from 'zod';
export const loginSchema = z.object({
  email: z
    .string()
    .nonempty('Please Enter your email')
    .email('Please enter valid email'),
  password: z.string().nonempty('Please Enter your password'),
});
export type LoginSchema = z.infer<typeof loginSchema>;
