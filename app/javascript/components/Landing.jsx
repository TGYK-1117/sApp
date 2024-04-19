import React from "react";
import { Link } from "react-router-dom";

export default () => (
	<div className="vw-100 vh-100 d-flex align-items-center justify-content-center">
		<div className="">
			<div className="p-1">
				<h3>Click to view selection of cats.</h3>
			</div>
			<div className="p-1 pb-3">
				<Link 
					to="/cats"
					className="btn btn-lg custom-button"
					role="button"
				>
				View Cats
				</Link>
			</div>
			<div className="p-1 border-solid">
				<small>Seeded from thecatapi.com</small>
			</div>
		</div>
	</div>
)