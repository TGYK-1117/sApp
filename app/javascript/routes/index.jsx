import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../components/Landing";

export default (
<Router>
	<Routes>
		<Route path="/" element={<Landing/>}/>
	</Routes>
</Router>
)