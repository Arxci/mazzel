import React, { useState, useRef, useLayoutEffect } from 'react'
import { motion, transform } from 'framer-motion'
import styles from './Feature.module.css'
import useWindowSize from '../../hooks/useWindowSize'

const getRelativeMousePos = (event, referenceElement) => {
	const target = referenceElement
	const rect = target.getBoundingClientRect()
	const width = referenceElement.offsetWidth

	const newPos = {
		x: event.clientX - rect.left,
		y: event.clientY - rect.top,
	}

	const widthTransformer = transform(
		[0, width],
		[
			rect.left + 300,
			Math.max(rect.left + 300, Math.min(rect.right - 400, 575)),
		]
	)

	const heightTransformer = transform([0, 100], [-30, 15])

	const transformedPos = {
		x: widthTransformer(newPos.x),
		y: heightTransformer(newPos.y),
	}

	return transformedPos
}

const Feature = ({ name, description, image, id }) => {
	const [isMouseOver, setIsMouseOver] = useState(false)
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
	const container = useRef()
	const isFirst = id === 0
	const windowSize = useWindowSize()
	let isMobile = false

	if (windowSize.x <= 767) {
		isMobile = true
	}

	const imageAnimations = {
		hidden: {
			x: mousePosition.x,
			top: mousePosition.y,
			opacity: 0,
		},
		visible: {
			x: mousePosition.x,
			top: mousePosition.y,
			opacity: 1,
		},
	}

	const mouseEnterHandler = () => {
		setIsMouseOver(true)
	}

	const mouseLeaveHandler = () => {
		setIsMouseOver(false)
	}

	useLayoutEffect(() => {
		const mouseMoveHandler = (e) => {
			setMousePosition(getRelativeMousePos(e, container.current))
		}

		window.addEventListener('mousemove', mouseMoveHandler)

		return () => window.removeEventListener('mousemove', mouseMoveHandler)
	}, [container])

	return (
		<div
			onMouseLeave={mouseLeaveHandler}
			onMouseEnter={mouseEnterHandler}
			ref={container}
			className={`${styles.feature} ${isFirst ? styles.first : undefined}`}
		>
			<div className={styles['feature-name-wrap']}>
				<div className="arrow-container">
					<div className="cta-arrow-leg">
						<div className="arrow-wing"></div>
						<div className="arrow-wing_2"></div>
					</div>
				</div>
				<h3 className={styles.name}>{name}</h3>
			</div>
			<p className={styles.description}>{description}</p>
			{isMobile && (
				<div
					style={{ backgroundImage: `url(${image})` }}
					className={styles.image}
				></div>
			)}
			{!isMobile && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={isMouseOver ? 'visible' : 'hidden'}
					variants={imageAnimations}
					style={{ backgroundImage: `url(${image})` }}
					transition={{ type: 'tween' }}
					className={styles.image}
				></motion.div>
			)}
		</div>
	)
}

export default Feature
