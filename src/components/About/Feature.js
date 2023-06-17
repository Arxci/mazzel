import React, { useState, useRef } from 'react'
import { motion, transform } from 'framer-motion'
import styles from './Feature.module.css'

const getRelativeMousePos = (event, referenceElement) => {
	console.log(referenceElement)
	const target = referenceElement
	const rect = target.getBoundingClientRect()
	const xCenter = (rect.left + rect.right) / 2
	const yCenter = (rect.top + rect.bottom) / 2
	const width = referenceElement.offsetWidth
	const height = referenceElement.offsetHeight

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

	const heightTransformer = transform(
		[rect.top, rect.bottom],
		[rect.top - 20, rect.bottom + 20]
	)

	const transformedPos = {
		x: widthTransformer(newPos.x),
		y: heightTransformer(newPos.y),
	}

	return transformedPos
}

const Feature = ({ name, description, image, id }) => {
	const [isMouseOver, setIsMouseOver] = useState(false)
	const [mousePosition, setMousePosition] = useState({})
	const container = useRef()
	const isFirst = id === 0

	const imageAnimations = {
		hidden: {
			x: mousePosition.x,
			y: mousePosition.y,
			opacity: 0,
		},
		visible: {
			x: mousePosition.x,
			y: mousePosition.y,
			opacity: 1,
		},
	}

	const mouseLeaveHandler = () => {
		setIsMouseOver(false)
	}

	const mouseEnterHandler = () => {
		setIsMouseOver(true)
	}

	const mouseMoveHandler = (e) => {
		setMousePosition(getRelativeMousePos(e, container.current))
	}

	return (
		<div
			onMouseLeave={mouseLeaveHandler}
			onMouseEnter={mouseEnterHandler}
			onMouseMove={mouseMoveHandler}
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
			<p className={styles.description}>
				{Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
				varius enim in eros elementum tristique. Duis cursus, mi quis viverra
				ornare, eros.}
			</p>

			<motion.div
				animate={isMouseOver ? 'visible' : 'hidden'}
				variants={imageAnimations}
				transition={{ type: 'tween' }}
				className={styles.image}
			></motion.div>
		</div>
	)
}

export default Feature
