import "./Layout1.css"

export const Layout1 = (props:any) => {
	return (
		<body className="body">
			<div className="SWcontainer w-container">
				<h1 className="SWusername">{props.userName}</h1>
				<p className="SWpost">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
				<h1 className="SWtitle">Löpning</h1>
				<h1 className="SWtime">60 min</h1>
				<div className="SWtimeofpost">10:22AM - 6/16/21</div>
			</div>
		</body>
	)
}
