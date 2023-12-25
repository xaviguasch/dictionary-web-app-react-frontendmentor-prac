import { useEffect, useState } from 'react'

import Header from './components/Header'
import InputForm from './components/InputForm'
import WordDisplay from './components/WordDisplay'
import { fetchDictionaryWord } from './api/utils'
import classes from './App.module.css'

function App() {
  const [word, setWord] = useState('')
  const [data, setData] = useState(null)

  const [theme, setTheme] = useState('light')
  const [font, setFont] = useState('sans-serif')

  useEffect(() => {
    const handleFetchWord = async () => {
      const { error, response } = await fetchDictionaryWord(word)
      setData(response[0])
    }

    if (word.length > 0) {
      handleFetchWord()
    }

    return () => {}
  }, [word])

  const handleThemeSwitch = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    console.log('now theme is: ', newTheme)

    setTheme(newTheme)
  }

  const handleWord = (inputWord: string) => {
    setWord(inputWord)
  }

  const handleChangeFont = (newFont) => {
    setFont(newFont)
  }

  return (
    <div className={classes.App} data-theme={theme}>
      <Header onHandleChangeFont={handleChangeFont} font={font} />
      <InputForm onHandleWord={handleWord} />
      {data && <WordDisplay data={data} />}
    </div>
  )
}

export default App
