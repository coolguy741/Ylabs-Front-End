import  AboutImage from '../../assets/images/about.png';
import SwissFlag from '../../assets/icons/Swiss_Flag.svg'
import MemberList from '../../components/molecules/MemberList/MemberList';
import type { TMember } from '../../components/atoms/Member';
import Hr from '../../components/atoms/Hr/Hr';
import Layout1 from '../../components/organisms/Layout1/Layout1';

const memebers: TMember[]= [
    {
        image: "/images/member1.png",
        name:   "Yaron Finger",
        description: "A bit about Yaron and what he does.  Not a lot, though; 2–4 lines work best.  Yaron likes to eat well."
    }, 
    {
        image: "/images/member2.png",
        name:   "Not Yaron Fanger",
        description: "A bit about Not Yaron and what he does.  Not a lot, though; 2–4 lines work best.  Not Yaron likes to eat well."
    }, 
    {
        image: "/images/member2.png",
        name:   "Also Not Yaron Finger",
        description: "A bit about Not Yaron and what he does.  Not a lot, though; 2–4 lines work best.  Not Yaron likes to eat well."
    }, 
    {
        image: "/images/member2.png",
        name:   "Still Not Mr Fanger",
        description: "A bit about Not Yaron and what he does.  Not a lot, though; 2–4 lines work best.  Not Yaron likes to eat well."
    }, 
    {
        image: "/images/member2.png",
        name:   "Sure Isn’t Him",
        description: "A bit about Not Yaron and what he does.  Not a lot, though; 2–4 lines work best.  Not Yaron likes to eat well."
    },
    {
        image: "/images/member2.png",
        name:   "Not Yaron Bro",
        description: "A bit about Not Yaron and what he does.  Not a lot, though; 2–4 lines work best.  Not Yaron likes to eat well."
    }
]


const About = () => {
    return (
        <Layout1>
            <div className='relative'>
                <div className='sm:absolute top-0 right-0 md:right-[10vw] lg:right-[22vw]'>
                    <img className='w-full' src={AboutImage} alt="About"/>
                    <div className='absolute bottom-0 right-0'>
                        <img className='w-[76px] h-[76px]'src={SwissFlag} alt="Flags of Switzerland" />
                    </div>
                </div>
            </div>
            <div className='relative mb-32 md:mb-52 lg:mb-80 max-w-[600px] lg:max-w-[790px] pt-[140px]'>
                <h2>Headquartered in Luzern, Switzerland, Ylabs is situated in an ever-dynamic melting pot of innovation & creativity.</h2>
            </div>
            <h3>Approach:</h3>
            <Hr className='mt-[11px]'/>
            <div className='mt-5'>
                <MemberList membersData={memebers}/>
            </div>
        </Layout1>
    )
}

export {About};