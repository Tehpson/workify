import { useState, useEffect } from 'react'

export const useDebounce = (value: any, delay: any) => {
	const [debounceValue, setDebounceValue] = useState(value)

	useEffect(() => {
		const handler = setTimeout(() => {
			setDebounceValue(value)
		}, delay)
		return () => { clearTimeout(handler) }
	})

	return debounceValue

}