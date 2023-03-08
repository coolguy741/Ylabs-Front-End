import Hr from "../../components/atoms/Hr/Hr";
import ImageSlider from "../../components/molecules/ImageSlider/ImageSlider";

const ArufoData = {
    projectName: "Arufabudo",
    mainImage: "/images/Arufabudo/main.png",
    title: "Manufacturing and selling premium boxing gear for warriors who aim to stand out from the crowd.",
    desc: "Our product line will consist of goods including boxing gloves, clothing, and accessories. Arufabudo gear will be available in both, ready-made and custom-made designs. Arufabudo gear will be available in both, ready-made and custom-made designs.",
    logo: "/icons/Arufabudo/ARUFABUDO_RGB_LOGO_Full_Lockup.svg",
    brand: {
        image: '/images/Arufabudo/brand.png',
        content: [
            {
                title: "01.  Warriorship",
                desc: "True boxers and combat sportsmen fit the warrior label perfectly. The discipline, resilience, and honor they possess are attributes which resonate with the drive behind the brand, and with the market segment we aim to serve."
            },
            {
                title: "02.  Unity",
                desc: "Our products are symbolic of the interconnected community we are building. On the surface, people see high quality boxing gear. However, at our core we are a family of diverse individuals who strive to become the best version of themselves.",
            },
            {
                title: "03.  Personalization",
                desc:  "All Arufabudo products are customizable with affixable patches containing scannable individual IDs. Our customers can own a piece of history, knowing that their glove, garment, or accessory is one of a kind."
            }
        ],
    },
    milestones: {
        image: '/images/Arufabudo/milestones.png',
        content:[
            {
                duration: "January – December 2022",
                content: "Development of the brand and the product range."
            },
            {
                duration: "January 2023",
                content: "First production batch."
            },
            {
                duration: "February 2023",
                content: "First marketing campaign launch.",
            },
            {
                duration: "April – June 2023",
                content: "Second production batch.",
            },
            {
                duration: "June – August 2023",
                content: "Essentials collection launch.",
            },                              
        ],  
    },
    showcase: [
        {
            url: '/images/Arufabudo/image1.png',
            alt: 'image1',
        }, 
        {
            url: '/images/Arufabudo/image2.png',
            alt: 'image2',
        }, 
        {
            url: '/images/Arufabudo/image3.png',
            alt: 'image3',
        }, 
        {
            url: '/images/Arufabudo/image4.png',
            alt: 'image4',
        }, 
    ]
}

const Arufo = () => {
    return (
        <div className="flex-col">
            <img className="w-full m-0" src={ArufoData.mainImage} alt="Arufabudo Main"/>
            <div className="px-7 lg:px-14 pb-40 mt-10 md:mt-20">
                <h2 className="max-w-[929px]">{ArufoData.title}</h2>
                <p className="font-s1 max-w-[801px] mt-6 md:mt-12">{ArufoData.desc}</p>
                <div className="mt-20 md:mt-64 flex justify-center">
                    <img className="w-2/3 sm:w-1/2" src={ArufoData.logo} alt={`${ArufoData.projectName} Logo`} />
                </div>
                <h3 className="mt-20 md:mt-64">Brand pillars:</h3>
                <Hr className="mt-[11px]" />
                <div className="flex">
                    <div className="mt-12 md:mt-24 w-1/2 pr-8">
                        <img className="transform hover:scale-110 transition-transform" src={ArufoData.brand.image} alt={`${ArufoData.projectName} brand`}/>
                    </div>
                    <div className="w-1/2">
                        {
                            ArufoData.brand.content.map((pillar) => {
                                return <>
                                    <h2 className="py-4 md:py-8">{pillar.title}</h2>
                                    <Hr className=""/>
                                    <p className="font-s2 py-4 md:my-8">{pillar.desc}</p>
                                </>
                            })
                        }
                    </div>
                </div>
                <h3 className="mt-20 md:mt-44">Milestones:</h3>
                <Hr className="mt-[11px]" />
                <div className="flex">
                    <div className="w-1/2">
                        {
                            ArufoData.milestones.content.map((milestone) => {
                                return <>
                                    <p className="font-s3 pt-6 md:pt-12">{milestone.duration}</p>
                                    <h2 className="pt-2 md:pt-4 pr-20">{milestone.content}</h2>
                                </>
                            })
                        }
                    </div>
                    <div className="mt-8 md:mt-16 w-1/2 pl-8">
                        <img className="float-right transform hover:scale-110 transition-transform" src={ArufoData.milestones.image} alt={`${ArufoData.projectName} milestones`}/>
                    </div>
                </div>
                <h3 className="mt-20 md:mt-44">Project showcase:</h3>
                <Hr className="mt-[11px]" />
                <div className="mt-10 md:mt-20">
                    <ImageSlider images={ArufoData.showcase}/>
                </div>
            </div>
        </div>
    )
}

export {Arufo};