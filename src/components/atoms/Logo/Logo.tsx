import LogoIcon from './logo.png';
import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to="/">
			<img className="w-14" src={LogoIcon} alt="logo"/>
		</Link>
	);
};

export { Logo };
