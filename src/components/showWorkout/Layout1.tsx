import "./Layout1.css"

export const Layout1 = (props:any) => {
	return (
		<body className="body">
			<div className="SWcontainer w-container">
				<h1 className="SWusername">{props.userName}</h1>
				<p className="SWpost">{props.Comment}</p>
				<h1 className="SWtitle">{props.Title}</h1>
				<h1 className="SWtime">{props.Time}</h1>
				<div className="SWtimeofpost">{props.Date}</div>
			</div>
		</body>
	)
}
