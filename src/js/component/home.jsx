import React from "react";
import Card from "./card";
import Navbar from "./navbar";
import MyFooter from "./footer";
import Jumbotron from "./jumbotron";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		
		<div className="wrapper">
			<Navbar/>
				<div className="wrapper2 ">
					<Jumbotron/>
					<div className="container my-3">
						<div className="row">
							<div className="col-lg-3 col-md-6 col-sm-12"> <Card/> </div>
							<div className="col-lg-3 col-md-6 col-sm-12"> <Card/> </div>
							<div className="col-lg-3 col-md-6 col-sm-12"> <Card/> </div>
							<div className="col-lg-3 col-md-6 col-sm-12"> <Card/> </div>
						</div>

					</div>
				</div>

				
			<MyFooter/>
			
		</div>
		

		
	);
};

export default Home;
