import './AccsesorisView.css'
import Axios from 'axios'
import { useState } from 'react'

export const AccsesorisView = () => {

	const [serverRespons, setServerRespons] = useState<any>()
	const [pokemonID, setPokemonID] = useState<string>('831')

	const fetchData = async () => {
		const API_URL = `https://pokeapi.co/api/v2/pokemon/${pokemonID}`
		try{
			setServerRespons(await Axios.get(API_URL))
		}catch{
			alert('error geting data from server')
		}
	}

	return (
		<div>
			<input placeholder="Pokemon id or name" onChange={event => setPokemonID(event.target.value)}></input>
			<button  onClick={() => { fetchData() }}>mkae api call</button>
			<h1>{serverRespons?.data?.name}</h1>
		</div>
	)
}
