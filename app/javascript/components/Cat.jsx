import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Cat = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [cat, setCat] = useState({});

	useEffect(() => {
		const url = `/api/v1/show/${params.id}`;
		fetch(url)
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error("Network response was not ok.");
			})
			.then((response) => setCat(response))
			.catch(() => navigate("/cats"));
	}, [params.id]);

	return (
		<div className="">
			<div className="hero position-relative d-flex align-items-center justify-content-center">
				<img
					src={cat.image}
					height={200}
					width={200}
					alt={`${cat.breed} image`}
					className="img-fluid position-absolute"
				/>
				<div className="overlay">
					<h1 className="display-4 position-relative text-white">{cat.breed}</h1>
				</div>
			</div>
			<div className="py-5">
				<div className="row">
					<div className="col-sm-12 col-lg-7">
						<h5 className="mb-2">Cat Description:</h5>
						<div>{cat.fact}</div>
					</div>
					<div className="col-sm-12 col-lg-2">
						<button type="button" className="btn btn=danger">Delete Cat</button>
					</div>
				</div>
				<Link to="/cats" className="btn btn-link">Back to Cats</Link>
			</div>
		</div>
	);
};

export default Cat;