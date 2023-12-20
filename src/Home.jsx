import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
	return (
		<div className="home">
			<div className="home__container">
				<img
					className="home__image"
					src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
					alt=""
				/>

				<div className="home__row">
					<Product
						id="12321341"
						title="Gskyer Telescope, 70mm Aperture 400mm AZ Mount Astronomical Refracting Telescope for Kids Beginners"
						price={99.99}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/7110baO-5UL._AC_UL450_SR450,320_.jpg"
					/>

					<Product
						id="49538094"
						title="National Tree Company Pre-Lit Artificial Full Christmas Tree, Green, Dunhill Fir, White Lights, Includes Stand, 7.5 Feet"
						price={239.0}
						rating={4}
						image="https://m.media-amazon.com/images/I/916tDPhnmjL._AC_SX679_.jpg"
					/>
				</div>

				<div className="home__row">
					<Product
						id="4903850"
						title="TEMI Dinosaur Truck Toys for Kids 3-5 Years, Tyrannosaurus Transport Car Carrier Truck with 8 Dino Figures, Activity Play Mat, Dinosaur Eggs, Capture Jurassic Play Set for Boys and Girls"
						price={99.99}
						rating={3}
						image="https://m.media-amazon.com/images/I/812a8RuqpjL._AC_UL320_.jpg"
					/>
					<Product
						id="23445930"
						title="Lucky Doug Building Toys Airplane Model Set -258 Pieces DIY Building Stem Projects Toys for Kids Boys Ages 8-12 and Older,Building Assembly Science Educational Toys Set Gifts for Model Aircraft Fan"
						price={39.99}
						rating={5}
						image="https://m.media-amazon.com/images/I/71P7FCezjeS._AC_SL1500_.jpg"
					/>
					<Product
						id="3254354345"
						title="Citizen Men's Eco-Drive Marvel Avengers Silver Stainless Steel Watch and Pin Gift Set, Avengers 60th Anniversary (Model: AW2080-64W)"
						price={598.99}
						rating={4}
						image="https://m.media-amazon.com/images/I/81ZyN7VYbfL._AC_SX679_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="90829332"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
						price={1094.98}
						rating={5}
						image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
					/>
				</div>
				<div className="home__row">
					<Product
						id="4903851"
						title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
						price={199.99}
						rating={3}
						image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
					/>
					<Product
						id="23445931"
						title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
						price={98.99}
						rating={5}
						image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
					/>
					<Product
						id="3254354344"
						title="INIU Portable Charger, Slimmest 10000mAh 5V/3A Power Bank, USB C in&out High-Speed Charging Battery Pack, External Phone Powerbank Compatible with iPhone 15 14 13 12 11 Samsung S22 S21 Google iPad etc"
						price={598.99}
						rating={4}
						image="https://m.media-amazon.com/images/W/MEDIAX_792452-T1/images/I/61Kf+coz5uL._AC_SY300_SX300_.jpg"
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
