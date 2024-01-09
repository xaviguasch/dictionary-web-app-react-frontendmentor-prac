import { useEffect, useState } from 'react'

import Header from './components/Header'
import InputForm from './components/InputForm'
import WordDisplay from './components/WordDisplay'
import { fetchDictionaryWord } from './api/utils'
import classes from './App.module.css'

function App() {
  const [word, setWord] = useState('')
  const [data, setData] = useState(null)

  const [theme, setTheme] = useState(false)
  const [font, setFont] = useState('sans-serif')

  const themeClass = theme ? 'dark' : 'light'

  console.log(themeClass)

  useEffect(() => {
    const setDarkMode = () =>
      document.querySelector('body')?.setAttribute('data-theme', 'dark')

    const setLightMode = () =>
      document.querySelector('body')?.setAttribute('data-theme', 'light')

    if (theme) {
      setDarkMode()
    } else {
      setLightMode()
    }
  }, [theme])

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

  const handleThemeSwitch = (theme) => {
    setTheme(theme)
  }

  const handleWord = (inputWord: string) => {
    setWord(inputWord)
  }

  const handleChangeFont = (newFont) => {
    setFont(newFont)
  }

  return (
    <div className={classes.App}>
      <Header
        onHandleChangeFont={handleChangeFont}
        font={font}
        onHandleThemeSwitch={handleThemeSwitch}
        theme={theme}
      />
      <InputForm onHandleWord={handleWord} />
      {data && <WordDisplay data={data} />}
    </div>
  )
}

export default App
