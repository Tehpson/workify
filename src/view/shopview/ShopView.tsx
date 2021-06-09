import './ShopView.css'
import {useState} from 'react'

export const ShopView = () => {
	const [count, setCount] = useState(0)


	return (
		<div>
			<h1 onClick={() => setCount(count +1)}>this is ShopView</h1>
		</div>
	)
}
