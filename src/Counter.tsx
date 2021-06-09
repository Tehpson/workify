import { useState } from 'react'

/* useState && functions*/
export const Counter = () => {
	const [count, setCount] = useState(0)
	const [updateBy, setupdateBy] = useState(1)

	const UpdateClick = () => {
		setupdateBy(updateBy + 1)
		setCount(count - 5)
	}
	const UpdateClickRender = () => {
		return count >= 5
			? <h1 style={{ color: '#000' }} onClick={() => UpdateClick()}> Update Click</h1>
			: <h1 style={{ color: '#ddd' }}>Update Click</h1>
	}

	return (
		<div>
			<h1 onClick={() => setCount(count + updateBy)}>{count}</h1>
			{UpdateClickRender()}

		</div>
	)
}
