import { Category } from './category'

export interface Expense {
  id: string
  name: string
  value: number
  description: string | undefined
  user_id: string
  category: Category
  category_id: string | undefined
  created_at: string
  updated_at: string
}
