import ProjectCard from "../../components/molecules/ProjectCard/ProjectCard";
import Layout1 from "../../components/organisms/Layout1/Layout1";

const projectsData = [
    {
        image: "/images/work_Arufabudo.png",
        link: "/arufo",
        name: "Arufabudo:",
        desc: "Premium, ready-made and custom boxing gear." ,
        imagePos: "left",
    },
    {
        image: "/images/work_Planifai.png",
        link: "/planify",
        name: "planify:",
        desc: "Comprehensive business plans starting from $300." ,
        imagePos: "right",
    },
    {
        image: "/images/work_Rapidcoder.png",
        link: "/rapid",
        name: "Rapidcoder:",
        desc: "Advanced computer science courses for an ever dynamic world." ,
        imagePos: "left",
    },
]

const Work = () => {
    return (
        <Layout1>
            <div className='mt-20'>
                <h1 className='max-w-[420px] md:max-w-[600px] lg:max-w-[929px]'>Explore our unique, future-forward portfolio.</h1>
                <div className="mt-8">
                    {projectsData.map((project) => {
                        return <ProjectCard image={project.image} name={project.name} desc={project.desc} imagePos={project.imagePos} link={project.link}/>
                    })}
                </div>
            </div>
        </Layout1>
    )
}

export { Work };