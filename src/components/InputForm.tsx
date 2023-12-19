import { useState, useEffect, type FormEvent } from 'react'

import styles from './InputForm.module.css'

const InputForm = ({ onHandleWord }) => {
  const [inputText, setInputText] = useState('')

  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()

    onHandleWord(inputText)
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input
          type='text'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button>Enter</button>
      </form>
    </>
  )
}

export default InputForm
