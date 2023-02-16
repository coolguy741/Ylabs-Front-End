import React from 'react';
import  AboutImage from '../../assets/images/about.png';
import  PlusImage from '../../assets/icons/plus.png';
import MemberList from '../../components/molecules/MemberList/MemberList';
import type { TMember } from '../../components/atoms/Member';

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
        <>
            <div className='relative'>
                <div className='absolute top-0 right-0 md:right-[10vw] lg:right-[22vw] '>
                    <img className='' src={AboutImage} alt="About Image"/>
                    <div className='absolute bottom-0 right-0 w-[74px] h-[74px] bg-red flex justify-center items-center'>
                        <img src={PlusImage} alt="+" />
                    </div>
                </div>
            </div>
            <div className='relative mb-32 md:mb-52 lg:mb-80 max-w-[600px] lg:max-w-[790px] pt-[140px]'>
                <h2>Headquartered in Luzern, Switzerland, Ylabs is situated in an ever-dynamic melting pot of innovation & creativity.</h2>
            </div>
            <h3>Approach:</h3>
            <hr className='border-none h-[2px] bg-black mt-[11px]'/>
            <div className='mt-5'>
                <MemberList membersData={memebers}/>
            </div>
        </>
    )
}

export {About};