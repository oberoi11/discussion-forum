import LandingPage from "./pages/LandingPage";
import { ThemeProvider } from "./contexts/ThemeContext";
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
