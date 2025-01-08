import {Routes,Route} from 'react-router-dom'
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import VerifyEmailPage from "./pages/VerifyEmailPage"
function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-emerald-700 flex items-center justify-center relative overflow-hidden">
      <Routes>
          <Route path="/" element={"Home"} />
          <Route path="/signup" element={<SignUpPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/verify-email" element={<VerifyEmailPage/>} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
