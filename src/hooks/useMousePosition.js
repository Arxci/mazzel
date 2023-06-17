import { useState, useLayoutEffect } from 'react'

const useMousePosition = () => {
	const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

	useLayoutEffect(() => {
		const updateMousePos = (e) => {
			setMousePos({ x: e.clientX, y: e.clientY })
		}

		window.addEventListener('mousemove', updateMousePos)

		return () => window.removeEventListener('mousemove', updateMousePos)
	}, [])

	return mousePos
}

export default useMousePosition
