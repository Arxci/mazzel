import React from 'react'
import logo from '../../assets/images/MainHeader/Logo.png'
import styles from './MainHeader.module.css'

const MainHeader = () => {
	return (
		<header className={styles.header}>
			<a href="/">
				<img className={styles.logo} src={logo} alt="logo" />
			</a>
		</header>
	)
}

export default MainHeader
