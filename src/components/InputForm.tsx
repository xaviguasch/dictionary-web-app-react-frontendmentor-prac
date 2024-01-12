import { useState, type FormEvent } from 'react'

import classes from './InputForm.module.css'

import SearchIcon from '../assets/images/icon-search.svg?react'

const InputForm = ({ onHandleWord }) => {
  const [inputText, setInputText] = useState('')

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()

    onHandleWord(inputText)
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className={classes.InputForm}>
        <input
          type='text'
          className={classes.input}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <SearchIcon className={classes.searchIconSvg} onClick={handleFormSubmit} />
      </form>
    </>
  )
}

export default InputForm
