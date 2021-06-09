import './HomeView.css'
import FakeAPIservice  from '../../assets/api/service/FakeAPIservice'
import { useState, useEffect } from 'react'

export const HomeView = () => {
	const [serverRespons, setServerRespons] = useState<any>()

	const fetchWomenData = async () => {
		try {
			const { data } = await FakeAPIservice.getByCategory('women\'s clothing')
			setServerRespons(data)
		} catch (error) {
			console.log('something went wrong!')
		}
	}
	const displayData = () => {
		return (
			serverRespons?.map((item: any) =>
				<div className="HomeViewClothItems" key={item.title}>
					<img className="HomeViewClothImage" src={item.image} alt='ERROR' />
					<p className="HomeViewClothTitle">{item.title}</p>
				</div>
			)
		)
	}

	useEffect(() => {
		fetchWomenData()
	}, [])


	return (
		<div className="homeViewWrapper">
			<div className="linediv">
				<h1 className="homeViewLineText">Women clothing</h1>
				<hr className="homeViewLine" />
				<button onClick={() => console.log(serverRespons)}/>
			</div>
			<div className="homeviewWomenWrapper">
				{displayData()}
			</div>
			<div className="linediv">
				<h1 className="homeViewLineText">men clothing</h1>
				<hr className="homeViewLine" />
			</div>
		</div>
	)
}
