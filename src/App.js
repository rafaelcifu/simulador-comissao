import "./styles.css";
import Counter from "./Components/Counter";
import Header from "./Components/Header";

export default function Change() {
  return (
    <div className="app-container">
    
    <div className="header">
          <Header />
        </div>
      
        <div className="counter">
          <Counter />
        </div>
    </div>
  );
}
