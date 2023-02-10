import React from "react";
import "./LanguageToggle.css";
import { useTheme } from "../../../context/ThemeProvider";
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
		<div className={theme === 'light' ? "container white-preview" : "container dark-preview"}>
			<label className="switch btn-color-mode-switch">
				<input type="checkbox" checked={i18n.language === "de"} name="color_mode" id="color_mode" value="1" onClick={() => toggleLanguage()}/>
				<label htmlFor="color_mode" data-on="DE" data-off="EN"
					className="btn-color-mode-switch-inner"></label>
			</label>
		</div>
	);
};

export default LanguageToggle;
