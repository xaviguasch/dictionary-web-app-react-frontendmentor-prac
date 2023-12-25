import React from 'react'
import classes from './ThemeCheckbox.module.css'

const ThemeCheckbox = ({ onHandleThemeSwitch, theme }) => {
  const handleThemeCheckboxSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={classes.ThemeCheckbox}>
      <form onSubmit={handleThemeCheckboxSubmit}>
        <input
          type='checkbox'
          id='theme-checkbox'
          checked={theme}
          onChange={(e) => onHandleThemeSwitch(e.target.checked)}
        />
      </form>
    </div>
  )
}

export default ThemeCheckbox
