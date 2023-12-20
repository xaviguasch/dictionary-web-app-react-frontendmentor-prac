import React from 'react'

import styles from './Header.module.css'

const Header = () => {
  const dynamicColor = 'blue'
  return (
    <div className={styles.Header} style={{ '--item-color': dynamicColor }}>
      Header
    </div>
  )
}

export default Header
