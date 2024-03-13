// Components/NavBar.js
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<ul className="navbar">
			<li>
				<NavLink to="/IX">IX</NavLink>
			</li>
			<li>
				<NavLink to="/XI">XI</NavLink>
			</li>
		</ul>
	);
};

export default NavBar;
