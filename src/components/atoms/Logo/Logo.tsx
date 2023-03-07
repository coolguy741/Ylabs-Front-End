import LogoDark from '../../../assets/icons/YLabs_Logo_Dark.svg';
import LogoWhite from '../../../assets/icons/YLabs_Logo_White.svg';
import { useTheme } from "../../../context/ThemeProvider"
import { Link } from 'react-router-dom';

const Logo = () => {
	const {theme} = useTheme();
	
	return (
		<Link to="/">
			<img className="w-14" src={theme === 'dark' ? LogoWhite : LogoDark } alt="logo"/>
		</Link>
	);
};

export { Logo };
