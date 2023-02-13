import React from 'react';
import { ApproachSection } from './Sections/ApproachSection';
import { HeroSection } from './Sections/HeroSection';

function Home() {
    return (
        <div>
            <HeroSection/>
            <ApproachSection/>
        </div>
    )
}

export {Home};