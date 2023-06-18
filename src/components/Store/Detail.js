import React from 'react'
import styles from './Detail.module.css'

const Detail = ({ title, white, black, id }) => {
	return (
		<>
			<div className={styles.title}>
				<div>{title}</div>
			</div>
			<div className={styles.black}>
				<p>{black}</p>
			</div>
			<div className={styles.white}>
				<p>{white}</p>
			</div>
		</>
	)
}

export default Detail
