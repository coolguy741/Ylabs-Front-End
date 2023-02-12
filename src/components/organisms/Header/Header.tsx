import Headroom from 'react-headroom';
import { useOnKeyDown } from '../../../hooks/useOnKeyDown';
import { useEffect, useState } from 'react';

import { BurgerIcon } from '../../atoms/BurgerIcon';
import { Logo } from '../../atoms/Logo';
import { MobileMenu } from '../../molecules/MobileMenu';
import { NavigationItem } from '../../atoms/NavigationItem';
import { ThemeToggle } from '../../atoms/ThemeToggle';
import { useLocation } from 'react-router-dom';
import LanguageToggle from '../../atoms/LanguageToggle/LanguageToggle';

export const navItems = [
	{
		href: '/about',
		title: 'About',
	},
	{
		href: '/work',
		title: 'Work',
	},
	{
		href: '/contact',
		title: 'Contact',
	},
];

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	let location = useLocation();

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	useEffect(() => {
		setIsOpen(false);
	}, [location]);

	useOnKeyDown('Escape', () => setIsOpen(false));

	const navigationVariants = {
		hidden: { opacity: 0, y: -10 },
		visible: (custom: number) => ({
			opacity: 1,
			y: 0,
			transition: { delay: custom },
		}),
	};

	return (
		<Headroom>
			<header className="relative z-50 px-4 lg:px-20 py-8 backdrop-blur-md">
				<div className="flex justify-between items-center">
					<Logo />
					<nav className="hidden md:block">
						<ul className="flex gap-8 text-lg">
							{navItems.map(({ href, title }, i) => (
								<NavigationItem
									href={href}
									title={title}
									key={href}
									variants={navigationVariants}
									initial="hidden"
									animate="visible"
									customDelay={(i + 1) * 0.1}
								/>
							))}
						</ul>
					</nav>
					<button
						className="absolute z-50 top-8 right-4 md:hidden"
						onClick={() => setIsOpen((prev) => !prev)}
						aria-label="Menu"
					>
						<BurgerIcon isOpen={isOpen} />
					</button>
					<div className="flex hidden md:flex">
						<LanguageToggle />
						<ThemeToggle />
					</div>
				</div>	
			</header>
			<MobileMenu isOpen={isOpen} />
		</Headroom>
	);
};

export { Header };