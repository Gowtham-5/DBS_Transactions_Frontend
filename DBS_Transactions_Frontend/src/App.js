import Sender from './Components/Sender'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import TransferAmount from './Components/TransferAmount'
import SuccessfulPage from './Components/SuccessfulPage'
import TransferType from './Components/TransferType'
import BankDetails from './Components/BankDetails'
import BankTransfer from './Components/BankTransfer'
import BankTransactionSuccessful from './Components/BankTransactionSuccessful'


function App() {

  return (
    <div className="App">
      <>
      <Routes>
      <Route exact path="/" element={<TransferType/>}/>
        <Route exact path="/sender" element={<Sender/>}/>
        <Route exact path="/transfer" element={<TransferAmount/>}/>
        <Route exact path="/successful" element={<SuccessfulPage/>}/>
        <Route exact path="/bank" element={<BankDetails/>}/>
        <Route exact path="/bank-transfer" element={<BankTransfer/>}/>
        <Route exact path="/bank-transfer-successful" element={<BankTransactionSuccessful/>}/>
      </Routes>
      </>
    </div>
  )
}

export default App
