import { Routes, Route } from "react-router-dom"
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <>
      <Routes>
        {/* <Route path='/admin/customer' element={<CustomerMaster />}></Route>
        <Route path='/suggest-order-qty' element={<SuggestOrderQTY />}></Route> */}
        <Route exact path='/' element={<DashboardPage />}></Route>
        {/* <Route path='/login' element={<LoginPage />}></Route>
        <Route exact path='/' element={<StartingPage />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
