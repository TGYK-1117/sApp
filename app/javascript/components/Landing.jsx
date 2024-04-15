import React from "react";
import { Link } from "react-router-dom";

export default () => (
	<div>
		<Link 
			to="/list"
			classname="btn btn-lg"
			role="button"
		>
		View List
		</Link>
	</div>
)