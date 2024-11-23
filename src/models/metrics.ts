import { Expense } from './expenses'

export interface MonthlyFinancialSummary {
  date: string
  incomes_total: number
  expenses_total: number
}

export interface CategoryWithMostRecords {
  name: string
  incomes_quantity: number
  expenses_quantity: number
}

export interface MonthlyBalanceOverTime {
  date: string
  balance: number
}

export interface Metrics {
  monthly_financial_summary: MonthlyFinancialSummary[]
  categories_with_most_records: CategoryWithMostRecords[]
  biggest_expenses: Expense[]
  monthly_balance_over_time: MonthlyBalanceOverTime[]
}
