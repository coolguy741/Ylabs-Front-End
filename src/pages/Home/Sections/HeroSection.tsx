import React, { useEffect, useState } from 'react';
import internal from 'stream';
import  LogoImage from '../../../assets/images/TEST1.png';
import OrganizationImage from '../../../assets/images/61.png';
import { HeroTitle } from '../../../components/molecules/HeroTitle';

function HeroSection() {
    const [state, setState] = useState<number>(1);
    useEffect(() => {
        // (state === 1 ? setTimeout(setState(2), 3000) : setTimeout(setState(1), 3000))
    }, [])

    return (
        <div>
            <div className='relative'>
                <img className='absolute top-0 right-0' src={LogoImage} />
            </div>
            <div className='text-9xl max-w-[920px] pt-[140px]'>
            {
                state === 1 ? (
                    <HeroTitle visible={true}>
                        <p>Transforming startup ideas into market-ready entities</p>
                    </HeroTitle>
                ):(
                    <>
                        Hello World.
                    </>
                )
            }
            </div>
            <div className='pt-20 max-w-[610px] text-xl'>
                Since 2017, we have been conceptualizing, developing, and directing revolutionary businesses. We dare to attempt what hasn’t been attempted before, embrace the unknown, and have a great time doing so.
            </div>
            <div className='mt-48 relative flex justify-center text-6xl'>
                <img className='w-full' src={OrganizationImage} />
                <p className='top-24 absolute text-center'>
                    Setting up and managing<br/> 
                    organizations of the future.
                </p>
                <p className='bottom-40 absolute'>
                    Today
                </p>
            </div>
        </div>
    )
}

export {HeroSection};