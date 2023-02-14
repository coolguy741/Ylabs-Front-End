import { useTheme } from "../../../context/ThemeProvider"
import "./LanguageToggle.css";
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
	const {theme} = useTheme();
	const {i18n} = useTranslation();

	
	function toggleLanguage(){
		if(i18n.language == "en") {
			i18n.changeLanguage("de");
		}		else {
			i18n.changeLanguage("en");
		}
	}

	return (
		<div className={theme === 'light' ? "container white" : "container dark"}>
			<label className="btn-color-mode-switch-language">
				<input type="checkbox" checked={i18n.language === "de"} name="color_mode1" id="color_mode1" value="1" onClick={() => toggleLanguage()}/>
				<label htmlFor="color_mode1" data-on="DE" data-off="EN"
					className="btn-color-mode-switch-language-inner"></label>
			</label>
		</div>
	);
};

export default LanguageToggle;
