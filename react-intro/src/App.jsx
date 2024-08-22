import './App.css'
import Greeting from "./components/Greeting";
import Counter from './components/counter';
import Quotes from './components/MessageList';

function App() {

  return (
    <>
      <div>
        <h2>Welcome to the Message Board</h2>
        <Greeting name="Cvetanka Apostolova"/>
      </div>
      <div className="card">
        <Counter/>
        <Quotes/>
      </div>
    </>
  )
}

export default App
