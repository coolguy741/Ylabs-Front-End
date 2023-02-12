import { useTheme } from '../../../context/ThemeProvider';
import './ThemeToggle.css';

const ThemeToggle = () => {
	const {theme, setTheme} = useTheme();

	function toggleTheme() {
		var element = document.body;
		element.classList.toggle("dark");
		setTheme(theme === 'dark' ? 'light' : 'dark');
	}

	return (
		<div className={theme === 'light' ? "container white-theme" : "container dark-theme"}>
			<label className="btn-color-mode-switch-theme">
				<input type="checkbox" checked={theme === 'dark'} name="color_mode" id="color_mode" value="1" onClick={() => toggleTheme()}/>
				<label htmlFor="color_mode" data-on="DE" data-off="EN"
					className="btn-color-mode-switch-theme-inner"></label>
			</label>
		</div>
	);
};

export { ThemeToggle };