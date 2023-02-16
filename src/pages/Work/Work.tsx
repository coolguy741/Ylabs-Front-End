const projectsData = [
    {
        image: "/images/work_Arufabudo.png",
        name: "Arufabudo:",
        desc: "Premium, ready-made and custom boxing gear." ,
    },
    {
        image: "/images/work_Planifai.png",
        name: "Planifai:",
        desc: "Comprehensive business plans starting from $300." ,
    },
    {
        image: "/images/work_Rapidcoder.png",
        name: "Rapidcoder:",
        desc: "Advanced computer science courses for an ever dynamic world." ,
    },
]

const Work = () => {
    return (
        <div className='mt-20'>
            <h1 className='max-w-[420px] md:max-w-[600px] lg:max-w-[929px]'>Explore our unique, future-forward portfolio.</h1>
        </div>
    )
}

export { Work };