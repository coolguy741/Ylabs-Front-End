import ProjectCard from "../../components/molecules/ProjectCard/ProjectCard";

const projectsData = [
    {
        image: "/images/work_Arufabudo.png",
        name: "Arufabudo:",
        desc: "Premium, ready-made and custom boxing gear." ,
        imagePos: "left",
    },
    {
        image: "/images/work_Planifai.png",
        name: "Planifai:",
        desc: "Comprehensive business plans starting from $300." ,
        imagePos: "right",
    },
    {
        image: "/images/work_Rapidcoder.png",
        name: "Rapidcoder:",
        desc: "Advanced computer science courses for an ever dynamic world." ,
        imagePos: "left",
    },
]

const Work = () => {
    return (
        <div className='mt-20'>
            <h1 className='max-w-[420px] md:max-w-[600px] lg:max-w-[929px]'>Explore our unique, future-forward portfolio.</h1>
            <div className="mt-8">
                {projectsData.map((project) => {
                    return <ProjectCard image={project.image} name={project.name} desc={project.desc} imagePos={project.imagePos}/>
                })}
            </div>
        </div>
    )
}

export { Work };