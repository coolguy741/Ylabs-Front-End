import { useLocation } from 'react-router';
import { useTheme } from '../../../context/ThemeProvider';
import './ThemeToggle.css';

const ThemeToggle = () => {
	const {theme, setTheme} = useTheme();
	const location = useLocation();
	const classNames = `${theme === 'dark' ? 'container dark' : 'container white'} ${location.pathname === '/arufo' ? 'static-theme' : 'dynamic-theme'}`

	function toggleTheme() {
		var element = document.body;
		element.classList.toggle("dark");
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}
	
	return (
		<div className={classNames}>
			<label className="btn-color-mode-switch-theme">
				<input type="checkbox" checked={theme === 'dark'} name="color_mode" id="color_mode" value="1" onClick={() => toggleTheme()}/>
				<label htmlFor="color_mode" data-on="./dark_black.svg" data-off="./light_white.svg"
					className="btn-color-mode-switch-theme-inner fill-current"></label>
			</label>
		</div>
	);
};

export { ThemeToggle };