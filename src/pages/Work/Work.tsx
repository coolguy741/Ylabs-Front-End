import Hr from "../../components/atoms/Hr/Hr";
import ProjectCard from "../../components/molecules/ProjectCard/ProjectCard";
import Layout1 from "../../components/organisms/Layout1/Layout1";

const projectsData = [
    {
        image: "/images/work_Arufabudo.png",
        icon: {
            exist : false,
            iconDark: "",
            iconWhite: "",
        },
        link: "/arufo",
        name: "Arufabudo:",
        desc: "Manufacturing and selling premium boxing gear for warriors who aim to stand out from the crowd." ,
    },
    {
        image: "/images/work_Planifai.png",
        icon: {
            exist : false,
            iconDark: "",
            iconWhite: "",
        },
        link: "/planify",
        name: "planify:",
        desc: "An AI-powered platform that creates comprehensive business plans in a matter of minutes." ,
    },
    {
        image: "/images/work_Rapidcoder.png",
        icon: {
            exist : true,
            iconDark: "/icons/Coming_Soon_Badge_Dark.svg",
            iconWhite: "/icons/Coming_Soon_Badge_White.svg",
        },
        link: "/rapid",
        name: "Rapidcoder:",
        desc: "An advanced e-learning platform for programmers and developers who aspire to be the best in their fields." ,
    },
]

const Work = () => {
    return (
        <Layout1>
            <div className='mt-20'>
                <h1 className='max-w-[420px] md:max-w-[600px] lg:max-w-[929px]'>Explore our unique, future-forward portfolio.</h1>
                <div className="mt-8">
                    {projectsData.map((project) => {
                        return <ProjectCard image={project.image} name={project.name} desc={project.desc} icon={project.icon} link={project.link}/>
                    })}
                </div>
                <Hr className={""}/>
            </div>
        </Layout1>
    )
}

export { Work };