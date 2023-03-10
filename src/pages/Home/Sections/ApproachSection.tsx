import Hr from "../../../components/atoms/Hr/Hr";
import { forwardRef, ForwardedRef , useEffect, useState, useRef } from "react";

interface CircleProps {
    title: string;
    selected: boolean;
    className: string;
    onClick: () => void;
}

const Circle = forwardRef<HTMLDivElement, CircleProps>((props, ref: ForwardedRef<HTMLDivElement>) => {
    return  <div ref={ref} onClick={props.onClick} className={`${props.className} font-h3 flex w-[26vw] xsm:h-[26vw] max-w-[500px] max-h-[500px] rounded-full items-center justify-center border-[3px] ${props.selected ? "text-black dark:text-white bg-white dark:bg-black border-black dark:border-white z-20": "text-white dark:text-black bg-black dark:bg-white z-0"}`}>
                <span>{props.title}</span>
            </div>;
});

const ApproachSection = () => {
    const [screenSize, setScreenSize] = useState({width: window.innerWidth, height: window.innerHeight});
    const [activeCircle, setActiveCircle] = useState<number>(0);
    const circleRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)];

    useEffect(() => {

        const handleScroll = () => {
            let closestCircleIndex = 0;
            let closestCircleDistance = Infinity;
            circleRefs.forEach((circleRef, index) => {
                const circleTop = circleRef.current?.getBoundingClientRect().top ?? 0;
                const circleHeight = circleRef.current?.clientHeight ?? 0;
                const distance = Math.abs(circleTop + circleHeight/2 - screenSize.height/2);
                if (distance < closestCircleDistance) {
                    closestCircleIndex = index;
                    closestCircleDistance = distance;
                }
                console.log("index: ", index);
                console.log("\n circle Top",distance );
                console.log("\n innerWidth", window.innerWidth);
                console.log("\n screen Size", screenSize);
            });
             setActiveCircle(closestCircleIndex);
        };
    
        const handleResize = () => {
            setScreenSize({width: window.innerWidth, height: window.innerHeight});
        }

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        }
    }, []);

    const handleCircleClick = (circleIndex: number) => {
        setActiveCircle(circleIndex);
    }

    return (
        <div className='relative mt-4 flex-column pb-[800px]'>
            <h3 className='text-3xl'>Approach:</h3>
            <Hr className="mt-[11px]" />
            <p className="font-s2 md:mt-[89px] max-w-[632px]">
                We understand that each idea is unique, and each project requires special dedication and attention.  In a fast-paced, ever-changing world, our approach has to be modular and highly efficient, which is why we developed the Ylabs 3-stage framework:
            </p>
            <div className='flex flex-col xsm:flex-row md:mt-[106px]'>
                <div className='w-[50%] text-xl sm:text-3xl md:text-4xl lg:text-6xl md:pl-[68px]'>
                    <Circle className='' ref={circleRefs[0]} title="Discovery" selected={0 === activeCircle} onClick={() => handleCircleClick(0)}/>
                    <Circle className='-mt-[9vw]' ref={circleRefs[1]} title="Conceptualization" selected={1 === activeCircle} onClick={() => handleCircleClick(1)}/>
                    <Circle className='-mt-[9vw]' ref={circleRefs[2]} title="Building" selected={2 === activeCircle} onClick={() => handleCircleClick(2)}/>
                </div>
                <div className='sticky self-start top-0 font-h3 w-[90%] max-w-[620px] xsm:w-[50%] pt-[29px] text-1xl md:text-3xl'>
                    { activeCircle === 0 && (
                        <>
                            <p>Stage details here over the years, to explain this point and make sure our clients understand the benefits of our unique framework.  This is just placeholder text, though.</p>
                            <p className='mt-12'>Over the years, we have  assembled a team of passionate experts and collaborate with dedicated independent talent to consistently realize our visions.</p>
                        </>
                    )}
                    { activeCircle === 1 && (
                        <>
                            <p>Conceptualization</p>
                            <p className='mt-12'>Over the years, we have  assembled a team of passionate experts and collaborate with dedicated independent talent to consistently realize our visions.</p>
                        </>
                    )}
                    { activeCircle === 2 && (
                        <>
                            <p>Building</p>
                            <p className='mt-12'>Over the years, we have  assembled a team of passionate experts and collaborate with dedicated independent talent to consistently realize our visions.</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export {ApproachSection};