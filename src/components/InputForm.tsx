import { useState, type FormEvent } from 'react'

import classes from './InputForm.module.css'

import SearchIcon from '../assets/images/icon-search.svg?react'

const InputForm = ({ onHandleWord }) => {
  const [inputText, setInputText] = useState('')
  const [isEmpty, setIsEmpty] = useState(false)

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (inputText.length === 0) {
      setIsEmpty(true)
    } else {
      setIsEmpty(false)
    }

    onHandleWord(inputText)
  }

  return (
    <>
      <form onSubmit={handleFormSubmit} className={classes.InputForm}>
        <input
          type='text'
          className={`${classes.input} ${isEmpty && classes.empty}`}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <SearchIcon className={classes.searchIconSvg} onClick={handleFormSubmit} />

        {isEmpty && <p className={classes.error}>Whoops, can’t be empty…</p>}
      </form>
    </>
  )
}

export default InputForm
