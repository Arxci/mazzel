import React from 'react'
import useScrollPosition from '../../hooks/useScrollPosition'
import styles from './ScrollIndicator.module.css'

const ScrollIndicator = () => {
	const scrollPosition = useScrollPosition()

	// [0, 300] -> [1, 0] map opacity from scroll position to 1 -> 0
	const oldRange = [0, 300]
	const newRange = [1, 0]
	const newValue =
		((scrollPosition - oldRange[0]) * (newRange[1] - newRange[0])) /
			(oldRange[1] - oldRange[0]) +
		newRange[0]
	const opacity = Math.min(Math.max(newValue, 0), 1)

	return (
		<div className={styles['scroll-container']} style={{ opacity: opacity }}>
			<div className={styles['scroll-wrapper']}>
				<div className={styles.scroll}>
					<div className={styles['scroll-line']} />
				</div>
				<p>Scroll Down</p>
			</div>
		</div>
	)
}

export default ScrollIndicator
