import { z } from 'zod'

export const VSbookSchema = z.object({
  title: z.string(),
  bookSourceId: z.string(),
  categoryId: z.string(),
})
