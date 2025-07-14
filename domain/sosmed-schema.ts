import { z } from 'zod';

// URL validation regex pattern for social media URLs
const urlSchema = z.string().url().optional().or(z.literal(''));

export const sosmedSchema = z.object({
  name: z.string().optional(),
  url: urlSchema,
  facebook: z.string()
    .optional()
    .refine(
      (val) => !val || val === '' || val.includes('facebook.com') || val.includes('fb.com'),
      { message: 'Please enter a valid Facebook URL' }
    ),
  instagram: z.string()
    .optional()
    .refine(
      (val) => !val || val === '' || val.includes('instagram.com'),
      { message: 'Please enter a valid Instagram URL' }
    ),
  linkedin: z.string()
    .optional()
    .refine(
      (val) => !val || val === '' || val.includes('linkedin.com'),
      { message: 'Please enter a valid LinkedIn URL' }
    ),
});

export type SosmedFormData = z.infer<typeof sosmedSchema>;