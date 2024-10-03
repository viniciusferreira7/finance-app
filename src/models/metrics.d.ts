import { Expense } from './expenses'

interface MonthlyFinancialSummary {
  date: string;
  incomes_total: number;
  expenses_total: number;
}

interface CategoryWithMostRecords {
  name: string;
  incomes_quantity: number;
  expenses_quantity: number;
}

interface MonthlyBalanceOverTime {
  date: string;
  balance: number;
}

interface Metrics {
  monthly_financial_summary: MonthlyFinancialSummary[];
  categories_with_most_records: CategoryWithMostRecords[];
  biggest_expenses: Expense[];
  monthly_balance_over_time: MonthlyBalanceOverTime[];
}
