import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { useStateValue } from "./StateProvider";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import Payment from "./Payment";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Footer from "./Footer";

const promise = loadStripe(
	"pk_test_51ONUQ8GRcX1u6yIJlwXIThYnAD56W8k6sW5hJGowsvq2tfouPMewGRfYaZtnTVW5oopbUwfqmg0nfxTJTTJXfWSa00Bo4ovoZe"
);

function App() {
	const [{}, dispatch] = useStateValue();
	useEffect(() => {
		auth.onAuthStateChanged((authUser) => {
			// console.log("THE USER IS >>> ", authUser);
			if (authUser) {
				// the user just logged in / the user was logged in

				dispatch({
					type: "SET_USER",
					user: authUser,
				});
			} else {
				// the user is logged out
				dispatch({
					type: "SET_USER",
					user: null,
				});
			}
		});
	}, []);

	return (
		<Router>
			<div className="App">
				<Routes>
					<Route path="/order" element={<order />} />
					<Route path="/Login" element={<Login />} />

					<Route
						path="/payment"
						element={
							<>
								<Elements stripe={promise}>
									<Payment />
								</Elements>
							</>
						}
					/>

					<Route
						path="/Checkout"
						element={
							<>
								<Header />
								<Checkout />
							</>
						}
					/>

					<Route
						path="/"
						element={
							<>
								<Header />
								<Home />
							</>
						}
					/>
					<Route
						path="/Orders"
						element={
							<>
								<Header />
								<Orders />
							</>
						}
					/>
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
