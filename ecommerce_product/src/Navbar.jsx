import { useGlobalContext } from './context';
import logo from './images/logo.svg';
import bars from './images/icon-menu.svg';
import Links from './Links';
import User from './User';

const Navbar = () => {
	return (
		<nav className="nav">
			<div className="container | nav__container">
				<div className="nav__content | flex">
					<button
						type="button"
						className="sidebar_btn btn"
					>
						<img
							src={bars}
							alt="menu"
						/>
					</button>
					<picture className="logo">
						<img
							src={logo}
							alt="sneakers"
						/>
					</picture>
					<Links />
					<User />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
