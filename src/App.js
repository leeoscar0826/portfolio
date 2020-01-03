
import React from 'react';
import { Link } from 'react-router-dom';

import Footer from './components/Footer';

import HumanStanding from './assets/Human-Standing@2x.png';
import HumanSitting from './assets/Human-Sitting@2x.png';
import Scene from './assets/Scene-Wireframe@2x.png';

class App extends React.Component {
	constructor() {
		super();

		this.state = {

		};

		this.updatePage = this.updatePage.bind(this);
	}

	updatePage() {
		setTimeout(function() {
			window.location.reload();
		}, 1);
	}

	render() {
		return (
			<div>
				<div className="app full-width float-left">
					<div className="hero-illustration">
						<img src={HumanStanding} className="hero-illustration-image human-standing" />
						<img src={HumanSitting} className="hero-illustration-image human-sitting" />
						<img src={Scene} className="hero-illustration-image scene" />
					</div>
					<div className="app-container">
						<div className="app-container-wrapper full-height float-left">
							<h1 className="app-container-wrapper-title">Oscar Lee</h1>
							<h3 className="app-container-wrapper-para">Lorem ipsum dolor sit amet, te indoctum repudiare torquatos duo, nam eligendi prodesset te. No rebum fabellas adolescens qui. Sed cu putent feugiat scaevola, quod ancillae disputando ut cum.</h3>
							<Link to={process.env.PUBLIC_URL + "/works"} className="app-container-wrapper-btn clickable-reg" onClick={ this.updatePage }>view works</Link>
						</div>
					</div>
				</div>
				<div className="app-contact full-width float-left">
					<div className="app-container">
						<h1 className="app-form-title align-center">Get in touch</h1>
						<p className="app-form-para align-center">Lorem ipsum dolor sit amet, te indoctum repudiare torquatos duo, nam eligendi prodesset te. No rebum fabellas adolescens qui. Sed cu putent feugiat scaevola, quod ancillae disputando ut cum.</p>
						<div className="">

						</div>
						<h2 className="app-form-btn clickable-reg align-center">lorem ipsum dolor</h2>
					</div>
				</div>
				<div className="app-inquiry full-width float-left">
					<div className="app-container">
						<h1 className="app-form-title align-center">Send an inquiry</h1>
						<p className="app-form-para align-center">Lorem ipsum dolor sit amet, te indoctum repudiare torquatos duo, nam eligendi prodesset te. No rebum fabellas adolescens qui. Sed cu putent feugiat scaevola, quod ancillae disputando ut cum.</p>
						<h2 className="app-form-btn clickable-reg align-center">lorem ipsum dolor</h2>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
