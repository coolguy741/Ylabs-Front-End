import Hr from "../../atoms/Hr/Hr";
import { ComingSoonSvg } from "../ComingSoonSvg";
import { Link } from "react-router-dom";
import ArrowIconDark from "../../../assets/icons/ArrowIconDark.svg";
import ArrowIconWhite from "../../../assets/icons/ArrowIconWhite.svg";
import { useTheme } from "../../../context/ThemeProvider";

const ProjectCard = ({image, comingSoon, name, desc, link}:{image:string, comingSoon:boolean, name:string, desc:string, link:string,
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
					{ comingSoon === true ? 
						<div className="absolute w-[143px] h-[143px] -top-[71px] -right-[71px]">
							<ComingSoonSvg/>
						</div> 
						:
						<></>
					}
				</div>
				<div className="w-1/2 flex-col relative ml-16">
					<div className="absolute bottom-0 w-full">
						<h2 className="mb-6">{name}</h2>
						<div className="flex justify-between w-full relative">
							<p className="max-w-[503px] font-h3">{desc}</p>
							<Link to = {link}><img className="w-[73px] h-[73px] absolute bottom-0 right-0" src={theme === "dark" ? ArrowIconWhite : ArrowIconDark} alt="Right Arrow"/></Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
