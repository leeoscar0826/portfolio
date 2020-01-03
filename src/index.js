
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Breakpoint, BreakpointProvider, setDefaultBreakpoints } from 'react-socks';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

import App from './App';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';

import './stylesheets/main.css';

setDefaultBreakpoints ([
	{ xs: 0 },
	{ s: 576 },
	{ m: 768 },
	{ l: 992 },
	{ xl: 1200 }
]);

function openMenu() {
	document.querySelector('.menu').style.left = '0';
}

function closeMenu() {
	document.querySelector('.menu').style.left = '-100%';
}

function updatePage() {
	setTimeout(function() {
		window.location.reload();
	}, 1);
}

const router = (
	<BreakpointProvider>
		<Router>
			<div>
				<ul className="nav full-width float-left">
					<div className="float-left">
						<div>
							<li className="nav-item">
								<Link to={process.env.PUBLIC_URL + "/"} className="nav-item-title nav-item-text nodec clickable-thin" onClick={ updatePage }>Oscar Lee</Link>
							</li>
						</div>
					</div>
					<div className="float-right">
						<Breakpoint customQuery="(min-width: 576px)">
							<div className="full-height float-left">
								<li className="nav-item">
									<Link to={process.env.PUBLIC_URL + "/about"} className="nav-item-link nav-item-text nodec clickable-thin" onClick={ updatePage }>About</Link>
								</li>
							</div>
							<div className="full-height float-left">
								<li className="nav-item">
									<Link to={process.env.PUBLIC_URL + "/works"} className="nav-item-link nav-item-text nodec clickable-thin" onClick={ updatePage }>Works</Link>
								</li>
							</div>
							<div className="full-height float-left">
								<li className="nav-item">
									<Link to={process.env.PUBLIC_URL + "/contact"} className="nav-item-link nav-item-text nodec clickable-thin" onClick={ updatePage }>Contact</Link>
								</li>
							</div>
						</Breakpoint>
						<Breakpoint customQuery="(max-width: 575px)">
							<div className="full-height float-left">
								<li className="nav-item">
									<p className="nav-item-button nav-item-text cursor" onClick={ openMenu }>Menu<MenuIcon className="icon" /></p>
								</li>
							</div>
						</Breakpoint>
					</div>
				</ul>
				<Breakpoint customQuery="(max-width: 575px)">
					<div className="menu full-width full-height">
						<div className="nav full-width float-left">
							<div className="float-right">
								<p className="nav-item-button nav-item-text cursor" onClick={ closeMenu }>Menu<CloseIcon className="icon" /></p>
							</div>
						</div>
						<div className="menu-list float-left">
							<ul style={{ listStyleType: "none" }}>
								<li className="menu-link">
									<Link to={process.env.PUBLIC_URL + "/"} className="nav-item-link nodec clickable-reg" onClick={ updatePage }>Home</Link>
								</li>
								<li className="menu-link">
									<Link to={process.env.PUBLIC_URL + "/about"} className="nav-item-link nodec clickable-reg" onClick={ updatePage }>About</Link>
								</li>
								<li className="menu-link">
									<Link to={process.env.PUBLIC_URL + "/works"} className="nav-item-link nodec clickable-reg" onClick={ updatePage }>Work</Link>
								</li>
								<li className="menu-link">
									<Link to={process.env.PUBLIC_URL + "/contact"} className="nav-item-link nodec clickable-reg" onClick={ updatePage }>Contact</Link>
								</li>
							</ul>
						</div>
					</div>
				</Breakpoint>
				<Switch>
					<Route exact path={process.env.PUBLIC_URL + "/"} component={ App } />
					<Route path={process.env.PUBLIC_URL + "/works"} component={ Works } />
					<Route path={process.env.PUBLIC_URL + "/about"} component={ About } />
					<Route path={process.env.PUBLIC_URL + "/contact"} component={ Contact } />
					<Route component={ NotFound } />
				</Switch>
			</div>
		</Router>
	</BreakpointProvider>
);

ReactDOM.render(router, document.getElementById('root'));
