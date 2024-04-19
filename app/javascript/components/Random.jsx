import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CatCard from "./catcard";

const Random = () => {
	const params = useParams();
	const navigate = useNavigate();
	const [cat, setCat] = useState({});

	useEffect(() => {
		const url = `/api/v1/random`;
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

export default Random;