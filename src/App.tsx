import { useEffect, useState } from 'react'

import InputForm from './components/InputForm'
import WordDisplay from './components/WordDisplay'
import { fetchDictionaryWord } from './api/utils'
import styles from './App.modules.css'

function App() {
  const [word, setWord] = useState('')
  const [data, setData] = useState(null)

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

  const handleWord = (inputWord: string) => {
    setWord(inputWord)
  }

  return (
    <>
      <h1>Dictionary Web App</h1>
      <InputForm onHandleWord={handleWord} />
      {data && <WordDisplay data={data} />}
    </>
  )
}

export default App
