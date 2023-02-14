import React from 'react';
import  AboutImage from '../../assets/images/about.png';
import  PlusImage from '../../assets/icons/plus.png';
import MemberList from '../../components/molecules/MemberList/MemberList';

const About = () => {
    return (
        <>
            <div className='relative'>
                <div className='absolute top-0 right-0 md:right-[10vw] lg:right-[22vw] '>
                    <img className='' src={AboutImage} alt="About Image"/>
                    <div className='absolute bottom-0 right-0 w-[74px] h-[74px] bg-red flex justify-center items-center'>
                        <img src={PlusImage} alt="+" />
                    </div>
                </div>
            </div>
            <div className='relative mb-32 md:mb-52 lg:mb-80 text-4xl lg:text-6xl max-w-[600px] lg:max-w-[790px] pt-[140px]'>
                Headquartered in Luzern, Switzerland, Ylabs is situated in an ever-dynamic melting pot of innovation & creativity.
            </div>
            <h3 className='text-3xl'>Approach:</h3>
            <hr className='border-none h-[2px] bg-black mt-[11px]'/>
            <MemberList/>
        </>
    )
}

export {About};