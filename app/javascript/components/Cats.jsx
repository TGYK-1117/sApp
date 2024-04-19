import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Cats = () => {
	const navigate = useNavigate();
	const [cats, setCats] = useState([]);

	useEffect(() => {
		const url = "/api/v1/cats/index"
		fetch(url)
		.then((response) => {
			if(response.ok) {
				return response.json();
			}
			throw new Error("Network response was not ok.");
		})
		.then((response) => setCats(response))
		.catch(() => navigate("/"));

	}, []);

	const allCats = cats.map((cat, index) => (
		<div key={index} className="col-md-6 col-lg-2">
			<div className="card mb-4">
				<img
					src={cat.image}
					className="card-img-top"
					alt={`${cat.breed} image`}
				/>
				<div className="card-body">
					<h5 className="card-title">{cat.breed}</h5>
					<Link to={`/cat/${cat.id}`} className="btn custom-button">
           				 View Cat
          			</Link>
				</div>
			</div>
		</div>
	));

	const noCats = (
		<div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
			<h4>
				No cats.
			</h4>
		</div>
	);

	return (
		<>
			<section className="jumbotron jumbotron-fluid text-center">
				<div className="container py-5">
					<h1 className="display-4">CATS</h1>
					<p className="lead text-muted">Click a cat for more details.</p>
					<div className="justify-content-center align-items-center">
						<Link to="/" className="btn custom-button">Home</Link>
						{" "}
						<Link to="/random" className="btn custom-button">Generate a New Cat</Link>
					</div>
				</div>
			</section>
			<div className="p-2">
				<main className="container">
					<div className="row justify-content-center align-items-center d-flex align-items-stretch">{cats.length > 0 ? allCats : noCats}</div>
				</main>
			</div>
		</>

	);
};

export default Cats;