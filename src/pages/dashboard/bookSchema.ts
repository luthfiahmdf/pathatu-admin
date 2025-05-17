import { z } from 'zod'

export const VSbookSchema = z.object({
  title: z.string(),
  bookSource: z.string(),
  category: z.string(),
})
