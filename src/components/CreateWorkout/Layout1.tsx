import { number } from "yargs"
import "./Layout1.css"

export const Layout1 = () => {
	return (
		<body className="body">
			<div className="CWcontainer w-container">
				<h1 className="CWusername">Tehpson</h1>
				<textarea rows={4} cols={50} maxLength={200} className="CWpost"></textarea>
				<input placeholder="title" maxLength={20} className="CWtitle"></input>
				<input placeholder="time" max={99999} min={0} maxLength={5} type="number" className="CWtime"></input>
				<div className="CWtimeofpost">10:22AM - 6/16/21</div>
			</div>
		</body>
	)
}
