
// Import as needed
import 'bootstrap/dist/css/bootstrap.min.css'
import HomePage from "./components/HomePage";
import './AppStyles.css';
import { Route, Routes } from "react-router-dom";
import NotFound from "./components/NotFound";


function App() {

  // Part 1, Task 2: Applying color scheme
  return (
    <div className='app-container bg-primary'> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    
  )
}

export default App
