import { GameSelect, Header, Input, Output } from "./components/index";
import { InputProvider } from "./contexts/index";
import "./style/App.css";

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="input-container">
        <GameSelect />
        <InputProvider>
          <Input />
          <Output />
        </InputProvider>
      </div>
    </div>
  );
}

export default App;
