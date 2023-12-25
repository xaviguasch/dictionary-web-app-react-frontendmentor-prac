import FontPicker from './FontPicker'

import styles from './Header.module.css'
import LogoSvg from '../assets/images/logo.svg'

const Header = ({ onHandleChangeFont, font }) => {
  return (
    <div className={styles.Header}>
      <img src={LogoSvg} alt='Logo' />

      <div>
        <FontPicker onHandleChangeFont={onHandleChangeFont} font={font} />
      </div>
    </div>
  )
}

export default Header
