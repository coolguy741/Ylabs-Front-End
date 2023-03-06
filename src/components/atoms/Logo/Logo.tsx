import LogoDark from '../../../assets/icons/YLabs_Logo_Dark.svg';

import { Link } from 'react-router-dom';

const Logo = () => {
	return (
		<Link to="/">
			<img className="w-14 dark:invert" src={LogoDark} alt="logo"/>
		</Link>
	);
};

export { Logo };
