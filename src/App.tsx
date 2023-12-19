import { useEffect, useState } from 'react'

import InputForm from './components/InputForm'
import { fetchDictionaryWord } from './api/utils'
import styles from './App.modules.css'

function App() {
  const [word, setWord] = useState('')
  const [wordData, setWordData] = useState(null)

  useEffect(() => {
    const handleFetchWord = async () => {
      const { error, response } = await fetchDictionaryWord(word)
      setWordData(response)
    }

    if (word.length > 0) {
      handleFetchWord()
    }

    return () => {}
  }, [word])

  const handleWord = (inputWord: string) => {
    setWord(inputWord)
  }

  console.log(wordData)

  return (
    <>
      <h1>Dictionary Web App</h1>
      <InputForm onHandleWord={handleWord} />
    </>
  )
}

export default App
