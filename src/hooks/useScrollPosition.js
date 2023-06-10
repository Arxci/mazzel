import { useState, useLayoutEffect } from 'react'

const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0)

	useLayoutEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY)
		}

		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return scrollPosition
}

export default useScrollPosition
