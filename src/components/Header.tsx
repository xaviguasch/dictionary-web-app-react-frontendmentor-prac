import FontPicker from './FontPicker'
import ThemeCheckbox from './ThemeCheckbox'

import styles from './Header.module.css'
import LogoSvg from '../assets/images/logo.svg'

const Header = ({ onHandleChangeFont, font, onHandleThemeSwitch, theme }) => {
  return (
    <div className={styles.Header}>
      <img src={LogoSvg} alt='Logo' />

      <div>
        <FontPicker onHandleChangeFont={onHandleChangeFont} font={font} />
        <ThemeCheckbox onHandleThemeSwitch={onHandleThemeSwitch} theme={theme} />
      </div>
    </div>
  )
}

export default Header
