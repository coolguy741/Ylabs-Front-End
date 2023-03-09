import Hr from "../../atoms/Hr/Hr";
import { Link } from "react-router-dom";
import ArrowIconDark from "../../../assets/icons/ArrowIconDark.svg";
import ArrowIconWhite from "../../../assets/icons/ArrowIconWhite.svg";
import { useTheme } from "../../../context/ThemeProvider";

const ProjectCard = ({image, icon, name, desc, link}:{image:string, icon:{exist: boolean, iconDark:string, iconWhite: string}, name:string, desc:string, link:string,
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
					{ icon.exist === false ? <></> :<img className="absolute -top-[60px] -right-[60px] w-[120px] y-[120px]" src={theme === "dark" ? icon.iconWhite : icon.iconDark} alt="coming soom icon"/> }
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
