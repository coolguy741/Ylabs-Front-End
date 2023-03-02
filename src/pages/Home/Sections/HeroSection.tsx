import  LogoImage from '../../../assets/images/logo.png';
import OrganizationImage from '../../../assets/images/61.png';
import { Typewriter } from 'react-simple-typewriter';
import Textra from 'react-textra';

const disciplines = ['explore', 'attempt', 'discover','differ', 'embrace', 'rebel', 'disrupt'];

const HeroSection = () => {
    return (
        <>
            <div className='flex justify-center'>
                <img className='sm:absolute top-40 right-4 md:right-16 max-w-[400px] sm:max-w-[600px]' src={LogoImage} alt="Ylabs"/>
            </div>
            <div className='relative'>
                <div className='max-w-[600px]  md:max-w-[920px] mt-[140px]'>
                    <div className='min-h-0 lg:min-h-[256px]'>
                        <h1>
                            Transforming startup ideas into market-ready entities
                        </h1>
                    </div>
                </div>
                <div className='mt-10 sm:mt-20 max-w-[610px]'>
                    <p className='font-s2'>
                        Since 2017, we have been conceptualizing, developing, and directing revolutionary businesses. We dare to attempt what hasn’t been attempted before, embrace the unknown, and have a great time doing so.
                    </p>
                </div>
                <div className='mt-24 sm:mt-48 relative flex justify-center text-4xl md:text-6xl mb-32'>
                    <img className='w-full' src={OrganizationImage} alt="Organization"/>
                    <p className='top-[5vw] absolute text-center'>
                        Setting up and managing<br/> 
                        organizations of the future.
                    </p>
                    <p className='bottom-[7vw] absolute'>
                        Today
                    </p>
                </div>
            </div>
        </>
    )
}

export {HeroSection};