import Hr from "../../atoms/Hr/Hr";
import { Link } from "react-router-dom";
import ArrowIconDark from "../../../assets/icons/ArrowIconDark.png";
import ArrowIconWhite from "../../../assets/icons/ArrowIconWhite.png";
import { useEffect } from "react";
import { useTheme } from "../../../context/ThemeProvider";

const ProjectCard = ({image, icon, name, desc, link}:{image:string, icon:string, name:string, desc:string, link:string,
}) => {
	const {theme} = useTheme();

	return (
		<div className="pb-20 md:pb-[85px]">
			<Hr className="" />
			<div className="mt-10 md:mt-[85px] justify-between flex">
				<div className="w-[50] relative">
					<Link to = {link}>
						<img src={image} alt={name}/>
					</Link>
					{ icon === "" ? <></> :<img className="absolute -top-[60px] -right-[60px]" src="./icons/coming_soon_icon.png" alt={icon}/> }
				</div>
				<div className="w-1/2 flex-col relative ml-16">
					<div className="absolute bottom-0 w-full">
						<h2 className="mb-6">{name}</h2>
						<div className="flex justify-between w-full relative">
							<p className="max-w-[503px] font-h3">{desc}</p>
							<img className="w-[73px] h-[73px] absolute bottom-0 right-0" src={theme === "dark" ? ArrowIconWhite : ArrowIconDark} alt="coming soon icon"/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
