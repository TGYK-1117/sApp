import React from "react";
import { Link } from "react-router-dom";

export default () => (
	<div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
		<div className="jumbotron jumbotron-fluid bg-transparent">
			<Link 
				to="/list"
				className="btn btn-lg custom-button"
				role="button"
			>
			View List
			</Link>
		</div>
	</div>
)