import { Routes, Route } from "react-router-dom"
import DashboardPage from './pages/DashboardPage'

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<DashboardPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
