import classNames from 'classnames';
import {Link, useLocation} from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

export interface NavigationItemProps {
	href: string;
	title: string;
	variants: Variants;
	initial: string;
	animate: string;
	customDelay: number;
}

const NavigationItem = ({
	href,
	title,
	variants,
	initial,
	animate,
	customDelay,
}: NavigationItemProps) => {
	const location = useLocation();
	const isActive = location.pathname.startsWith(href);

	return (
		<motion.li
			variants={variants}
			initial={initial}
			animate={animate}
			custom={customDelay}
		>
			<Link to={href}>
				<a
					className={classNames(
						isActive
							? 'font-bold text-off-black dark:text-off-white'
							: 'font-medium text-grey-700 md:text-grey-500 hover:text-off-black dark:hover:text-off-white',
						'uppercase md:underlined transition relative block whitespace-nowrap text-2xl md:text-lg'
					)}
				>
					{title}
				</a>
			</Link>
		</motion.li>
	);
};

export { NavigationItem };
