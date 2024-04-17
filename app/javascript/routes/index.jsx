import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../components/Landing";
import Cats from "../components/Cats";
import Cat from "../components/Cat";
import Random from "../components/Random"

export default (
<Router>
	<Routes>
		<Route path="/" element={<Landing />}/>
		<Route path="/cats" element={<Cats />} />
		<Route path="/cat/:id" element={<Cat />} />
		<Route path="/random" element={<Random/>}/>
	</Routes>
</Router>
)