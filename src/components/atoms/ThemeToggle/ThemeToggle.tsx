import { useEffect, useState } from 'react';

const ThemeToggle = () => {
	const [mounted, setMounted] = useState(false);
	const [theme, setTheme] = useState('light');

	useEffect(() => setMounted(true), []);

	return (
		<button
			aria-label="Toggle Dark Mode"
			type="button"
			className="p-2 bg-transparent border-2 border-grey-300 dark:border-grey-700 rounded-full dark:bg-transparent flex items-center justify-center hover:ring-2 hover:ring-offset-2 ring-grey-300 dark:hover:ring-2 dark:hover:ring-offset-2 dark:ring-grey-200 transition-all"
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
		>
			{mounted && (
				<>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						className="w-5 h-5 text-grey-800 dark:text-grey-200"
					>
						{theme === 'dark' ? (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
							/>
						) : (
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
							/>
						)}
					</svg>
					<span className="md:hidden">
						Switch to {theme === 'dark' ? 'light' : 'dark'} mode
					</span>
				</>
			)}
		</button>
	);
};

export { ThemeToggle };
