import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CatCard from "./CatCard"; 

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
		<CatCard catObj={cat}/>
	);
};

export default Cat;