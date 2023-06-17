import { useState, useLayoutEffect } from 'react'

const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({ x: 0, y: 0 })

	useLayoutEffect(() => {
		const windowResizeHandler = () => {
			setWindowSize({ x: window.innerWidth, y: window.innerHeight })
		}

		window.addEventListener('resize', windowResizeHandler)
		windowResizeHandler()
		return () => window.removeEventListener('resize', windowResizeHandler)
	}, [])

	return windowSize
}

export default useWindowSize
