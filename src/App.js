import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import './App.css'
import { PrimaryButton, SecondaryButton } from './components/Button'
import { NormalText, BoldText } from './components/Text'

const theme = {
  mainColor: 'green',
  secondaryColor: 'purple'
}
function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <ThemeProvider theme={theme}>
        <BoldText>Styled component boilerplate!</BoldText>
        <NormalText>Number of clicked: {count}</NormalText>
        <PrimaryButton
          onClick={() => setCount((prevState) => prevState + 1)}
          className={'margin-right'}
        >
          Click here
        </PrimaryButton>
        <SecondaryButton as="a" href="/">
          Refresh page
        </SecondaryButton>
      </ThemeProvider>
    </div>
  )
}

export default App
