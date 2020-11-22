import {useState} from 'react'
import './App.css';
import Button, {PrimaryButton, SecondaryButton} from './components/Button'
import {NormalText, BoldText} from './components/Text'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <BoldText>Styled component boilerplate!</BoldText>
      <NormalText>Number of clicked: {count}</NormalText>
      <PrimaryButton onClick={() => setCount(prevState => prevState + 1)} className={'margin-right'}>Click here</PrimaryButton>
      <SecondaryButton as='a' href="/">Refresh page</SecondaryButton>
    </div>
  );
}

export default App;
