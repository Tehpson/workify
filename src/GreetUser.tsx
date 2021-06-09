/* props */
export const GreetUser = (props: { user: string, age?: number }) => {

	const showAlert = (alerttext: string | undefined) => {
		alert(alerttext)
	}
	return (
		<>
			<h1 onClick={() => showAlert(props.age?.toString())}>Welcome {props.user}</h1>
			<h1 onClick={() => showAlert(Math.random().toString())}>Random Number</h1>
		</>
	)
}