import { z } from 'zod';

export const contactSchema = z.object({
  name: z.string().trim().min(2, 'Enter your full name.').max(80),
  email: z.string().trim().email('Enter a valid email address.'),
  subject: z.string().trim().min(3, 'Give it a short subject.').max(120),
  message: z.string().trim().min(10, 'Say a bit more — at least 10 characters.').max(2000),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
