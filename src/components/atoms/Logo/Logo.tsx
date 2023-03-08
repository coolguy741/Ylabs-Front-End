import LogoDark from '../../../assets/icons/YLabs_Logo_Dark.svg';
import LogoWhite from '../../../assets/icons/YLabs_Logo_White.svg';
import { useTheme } from "../../../context/ThemeProvider"
import { Link, useLocation } from 'react-router-dom';

const Logo = () => {
	const {theme} = useTheme();
	const location = useLocation();
	
	return (
		<Link to="/">
			<img className="w-14" src={location.pathname === '/arufo' ? LogoWhite : theme === 'dark' ? LogoWhite : LogoDark } alt="logo"/>
		</Link>
	);
};

export { Logo };
