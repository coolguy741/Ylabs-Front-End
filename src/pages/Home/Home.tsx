import Layout1 from '../../components/organisms/Layout1/Layout1';
import { ApproachSection } from './Sections/ApproachSection';
import { HeroSection } from './Sections/HeroSection';

const Home = () => {
    return (
        <Layout1>
            <HeroSection/>
            <ApproachSection/>
        </Layout1>
    )
}

export {Home};