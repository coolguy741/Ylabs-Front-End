import React, { useEffect, useState } from 'react';
import  LogoImage from '../../../assets/images/logo.png';
import OrganizationImage from '../../../assets/images/61.png';
import { HeroTitle } from '../../../components/molecules/HeroTitle';

const HeroSection = () => {
    const [state, setState] = useState<number>(1);
    useEffect(() => {
        // (state === 1 ? setTimeout(setState(2), 3000) : setTimeout(setState(1), 3000))
    }, [])

    return (
        <div>
            <div className='relative flex justify-center'>
                <img className='md:absolute top-0 right-0' src={LogoImage} />
            </div>
            <div className='relative text-6xl lg:text-h1 max-w-[600px]  md:max-w-[920px] pt-[140px]'>
            {
                state === 1 ? (
                    <HeroTitle initialState={1} />
                        
                ):(
                    <>
                        Hello World.
                    </>
                )
            }
            </div>
            <div className='mt-10 sm:mt-20 max-w-[610px] text-xl'>
                Since 2017, we have been conceptualizing, developing, and directing revolutionary businesses. We dare to attempt what hasn’t been attempted before, embrace the unknown, and have a great time doing so.
            </div>
            <div className='mt-24 sm:mt-48 relative flex justify-center text-4xl md:text-6xl mb-32'>
                <img className='w-full' src={OrganizationImage} />
                <p className='top-[5vw] absolute text-center'>
                    Setting up and managing<br/> 
                    organizations of the future.
                </p>
                <p className='bottom-[7vw] absolute'>
                    Today
                </p>
            </div>
        </div>
    )
}

export {HeroSection};