import { useCallback, useState } from 'react'

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';
import { GlobalStyle } from "./styles/global";

export function App() {
  const [
    isNewTransactionModalOpen,
    setIsNewTransactionModalOpen
  ] = useState(false);

  const handleOpenNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(true)
  }, [])

  const handleCloseNewTransactionModal = useCallback(() => {
    setIsNewTransactionModalOpen(false)
  }, [])


  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

      <Dashboard />
      
      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      
      <GlobalStyle/>
    </TransactionsProvider>
  );
}
