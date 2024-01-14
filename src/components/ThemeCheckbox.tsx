/// <reference types="vite-plugin-svgr/client" />

import classes from './ThemeCheckbox.module.css'

import LogoIcon from '../assets/images/icon-moon.svg?react'

const ThemeCheckbox = ({ onHandleThemeSwitch, theme }) => {
  const handleThemeCheckboxSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={classes.ThemeCheckbox}>
      <form onSubmit={handleThemeCheckboxSubmit}>
        <label className={classes.switch} htmlFor='checkbox'>
          <input
            type='checkbox'
            id='checkbox'
            className={classes.checkbox}
            checked={theme}
            onChange={(e) => onHandleThemeSwitch(e.target.checked)}
          />
          <span className={classes.slider}></span>
        </label>
      </form>
      <LogoIcon className={classes.moonSvg} />
    </div>
  )
}

export default ThemeCheckbox
