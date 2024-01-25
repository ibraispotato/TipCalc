import MainPage from "./mainPage/mainPage.jsx"
import { GetContext } from "./context/context.js";
import './App.css';

function App() {
  return (
    <div>
      <GetContext>
        <MainPage />
      </GetContext>
      
    </div>
  );
}

export default App;
