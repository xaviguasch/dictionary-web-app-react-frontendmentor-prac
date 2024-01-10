import FontPicker from './FontPicker'
import ThemeCheckbox from './ThemeCheckbox'

import classes from './Header.module.css'
import LogoSvg from '../assets/images/logo.svg?react'

const Header = ({ onHandleChangeFont, font, onHandleThemeSwitch, theme }) => {
  return (
    <div className={classes.Header}>
      <LogoSvg className={classes.logo} />

      <div className={classes.inputGroup}>
        <FontPicker onHandleChangeFont={onHandleChangeFont} font={font} />
        <ThemeCheckbox onHandleThemeSwitch={onHandleThemeSwitch} theme={theme} />
      </div>
    </div>
  )
}

export default Header
