import { object, string, number, date, InferType } from 'yup'

export const userSchema = object({
  name: string().required(),
  age: number().required().positive().integer(),
  email: string().email(),
  website: string().url().nullable(),
  createdOn: date().default(() => new Date()),
})

export type User = InferType<typeof userSchema>
