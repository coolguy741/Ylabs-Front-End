import LogoIcon from './logo.svg';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to="/">
			<img className="w-14 dark:invert" src={LogoIcon} alt="logo"/>
		</Link>
	);
};

export { Logo };
