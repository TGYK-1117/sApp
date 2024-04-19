import React from "react";
import { Link } from "react-router-dom";

const CatCard = ({catObj}) => {
	return (
		<div className="p-3">
			<div className="">
				<div className="justify-content-center align-items-center d-flex">
					<Link to="/cats" className="ml-5 btn custom-button">Back to Cats</Link>
				</div>
				<div className="justify-content-center align-items-center d-flex">
					<div className="card mb-4 col-md-5 mt-3">
						<img
							src={catObj.image}
							alt={`${catObj.breed} image`}
							className="card-img-top"
						/>
						<div className="card-title p-2">
							<h2 className="">{catObj.breed}</h2>
						</div>
						<div className="card-body">
							<h5>{catObj.fact}</h5>
						</div>
					</div>
				</div>	
			</div>
		</div>
	);
};

export default CatCard;