import './404.css'

export const page404 = () => {
    return (
        <body>
            <div className="container">
                <div className="centered">
                    <pre>
                        <code>
                            <span className="green">&lt;!</span><span>DOCTYPE html</span><span className="green">&gt;</span><br />
                            <span className="orangeOne">&lt;html&gt;</span><br />
                            <span className="orangeTwo">&lt;wrapper&gt;</span><br />
                            <span className="orangeThree">&lt;h1&gt;</span><br />
                            <span className="error404">ERROR 404! FILE NOT FOUND!</span><br />


                            <span className="orangeThree">&lt;/h1&gt;</span><br />
                            <span className="orangeTwo">&lt;/wrapper&gt;</span><br />
                            <span className="orangeTwo">&lt;body&gt;</span><br />
                            <span className="comment">&lt;!--Sorry, the file you are looking for,
                                is not where you think it is.--&gt;
                            </span><br />
                            <span className="orangeTwo">&lt;/body&gt;</span><br />
                            <span className="orangeOne">&lt;/html&gt;</span><br />
                        </code>
                    </pre>
                </div>
            </div>
        </body>
    )
}
