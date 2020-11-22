import {useState} from 'react'
import './App.css';
import Button from './components/Button'
import {NormalText} from './components/Text'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <NormalText>Number of clicked: {count}</NormalText>
      <Button text='Click here' onClick={() => setCount(prevState => prevState + 1)}/>
    </div>
  );
}

export default App;
