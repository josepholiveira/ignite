import { createContext, ReactNode, useContext, useEffect, useState } from 'react'

import { api } from '../services/api';
import formatDate from '../utils/formatDate';
import formatValue from '../utils/formatValue';

interface Transaction {
  id: number;
  title: string;
  category: string;
  type: string;
  amount: number;
  formattedValue: number;
  formattedDate: string;
  createdAt: string;
}

interface TransactionInput {
  title: string;
  amount: number;
  category: string;
  type: string;
}

interface TransactionsProviderProps {
  children: ReactNode;
}

interface ContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<ContextData>({} as ContextData)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('/transactions')
      .then(response => 
        setTransactions(
          response.data.transactions.map((transaction: Transaction) => ({
            ...transaction,
            formattedValue: formatValue(transaction.amount),
            formattedDate: formatDate(transaction.createdAt)
          }))
        )
      )
  }, [])

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput, 
      createdAt: new Date()
    });

    const { transaction } = response.data

    setTransactions(oldState => [...oldState, {
      ...transaction,
      formattedValue: formatValue(transaction.amount),
      formattedDate: formatDate(transaction.createdAt)
    }])
  }

  return (
    <TransactionsContext.Provider value={{transactions, createTransaction}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext);

  return context;
}