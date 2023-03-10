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
		title: 'About,',
	},
	{
		href: '/work',
		title: 'Work,',
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
		<div className={`absolute top-0 w-full ${location.pathname === '/arufo' ? "dark" : ""}`}>
				<header className="hover:bg-lightGray dark:hover:bg-lightBlack relative z-50 px-7 lg:px-14 py-8">
					<div className="flex items-center text-3xl md:text-xl leading-5 text-black dark:text-white">
						<div className="flex-grow">
							<Logo />
						</div>
						<nav className="hidden md:block min-w-[258px] mr-[81px]">
							<ul className="flex gap-5 justify-between">
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
						<div className="flex justify-between w-[229px] mr-[141px] hidden md:flex">
							<div>
								<LanguageToggle/>
							</div>
							<div>
								<ThemeToggle />
							</div>
						</div>
						<div className="flex hidden md:block">
							Ylabs 	&copy;2023
						</div>
					</div>	
				</header>
				<MobileMenu isOpen={isOpen} />
		</div>
	);
};

export { Header };