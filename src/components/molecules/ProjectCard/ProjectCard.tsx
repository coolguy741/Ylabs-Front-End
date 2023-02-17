import Hr from "../../atoms/Hr/Hr";
import { Link } from "react-router-dom";

const ProjectCard = ({image, name, desc, imagePos, link}:{image:string, name:string, desc:string, imagePos:string, link:string,
}) => {
	return (
		<div className="mt-8 mb-20 md:mb-32">
			<Hr className="" />
			<div className={`mt-20 md:mt-40 justify-between ${imagePos === "left" ? "flex": "flex flex-row-reverse"}`}>
				<div className="w-[70]">
					<Link to = {link}>
						<img src={image} alt={name}/>
					</Link>
				</div>
				<div className={`w-1/3 flex-col ${imagePos === "left" ? "ml-16": "mr-16"}`}>
					<h2 className="mb-6">{name}</h2>
					<p className="max-w-[335px] font-medium text-1xl md:text-3xl">{desc}</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
