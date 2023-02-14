
const ApproachSection = () => {
    return (
        <div className='mt-4 flex-column'>
            <h3 className='text-3xl'>Approach:</h3>
            <hr className='border-none h-[2px] bg-black mt-[11px]'/>
            <div className='flex'>
                <div className='w-[50%] mt-[10vw] lg:mt-32 text-1xl sm:text-3xl md:text-4xl lg:text-6xl'>
                    <div className=' flex w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full items-center justify-center text-white dark:text-black bg-black dark:bg-white z-20'>
                        <span>Discovery</span>
                    </div>
                    <div className='-mt-[9vw]  flex  w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full items-center justify-center text-black dark:text-white bg-white dark:bg-black border-[3px] border-black dark:border-white z-10'>
                        <span>Conceptualization</span>
                    </div>
                    <div className='-mt-[9vw]  flex  w-[35vw] h-[35vw] max-w-[500px] max-h-[500px] rounded-full items-center justify-center text-black dark:text-white bg-white dark:bg-black border-[3px] border-black dark:border-white z-0'>
                        <span>Building</span>
                    </div>
                </div>
                <div className='w-[50%] mt-[18vw] lg:mt-64 text-1xl md:text-3xl'>
                    <p>
                        Stage details here over the years, to explain this point and make sure our clients understand the benefits of our unique framework.  This is just placeholder text, though.
                    </p>
                    <p className='mt-12'>
                        Over the years, we have  assembled a team of passionate experts and collaborate with dedicated independent talent to consistently realize our visions.
                    </p>
                </div>
            </div>
        </div>
    )
}

export {ApproachSection};