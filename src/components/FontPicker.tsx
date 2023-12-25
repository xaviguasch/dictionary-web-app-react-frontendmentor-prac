import { useState } from 'react'
import classes from './FontPicker.module.css'

const FontPicker = ({ onHandleChangeFont, font }) => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={classes.FontPicker}>
      <form onSubmit={handleSubmit}>
        <select
          id='font-select'
          value={font}
          onChange={(event) => {
            onHandleChangeFont(event.target.value)
          }}
        >
          <option value='sans-serif'>Sans Serif</option>
          <option value='serif'>Serif</option>
          <option value='mono'>Mono</option>
        </select>
      </form>
      <p>{font}</p>
      <p>FontPicker</p>
    </div>
  )
}

export default FontPicker
