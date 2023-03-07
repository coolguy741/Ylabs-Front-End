import Hr from '../../components/atoms/Hr/Hr';
import Layout1 from '../../components/organisms/Layout1/Layout1';
import SwissFlag from '../../assets/icons/Swiss_Flag.svg';

const Contact = () => {
    return (
        <Layout1>
            <div className=''>
                <div className='flex'>
                    <h1 className='w-3/5 sm:mt-20 mb-20 text-4xl md:text-6xl lg:text-9xl'>
                        Hi!<br/>
                        Let's get to know<br/>
                        each other!<br/>
                    </h1>
                    <div className='w-2/5'>
                        <img src='/images/smile.png' alt="smile"/>
                    </div>
                </div>
                <div className='font-h2 text-3xl md:text-4xl lg:text-6xl'>
                    <Hr className='mb-8'/>
                    <div className='flex'>
                        <div className='w-1/3'>Office hours:</div>
                        <div className='w-2/3'>Mon – Fri  08:20 – 18:00 CET</div>
                    </div>
                    <Hr className='mt-9 mb-8'/>
                    <div className='flex'>
                        <div className='w-1/3'>Email:</div>
                        <div className='w-2/3'>hello@ylabs.swiss</div>
                    </div>
                    <Hr className='mt-9 mb-8'/> 
                    <div className='flex'>
                        <div className='w-1/3'>Telephone:</div>
                        <div className='w-2/3'>+41 79 821 60 88</div>
                    </div>
                    <Hr className='mt-9 mb-8'/>
                    <div className='flex'>
                        <div className='w-1/3'>LinkedIn</div>
                        <div className='w-1/3'>Instagram</div>
                        <div className='w-1/3'>Facebook</div>
                    </div>
                    <Hr className='mt-9 mb-[23px]'/>
                    <div className='flex justify-between'>
                        <div className='my-auto'>Sempacherstrasse 5, 6003 Luzern, Switzerland</div>
                        <img className="w-[76px] h-[76px]"src={SwissFlag} alt='Flags of Switzerland'/>
                    </div>
                    <Hr className='mt-[23px] mb-8'/>
                </div>
            </div>
        </Layout1>
    )
}

export {Contact};