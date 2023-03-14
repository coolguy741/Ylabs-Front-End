import { useTheme } from "../../../context/ThemeProvider"

const ComingSoonSvg = () => {
	const {theme} = useTheme();
	
	return (
    <>
      {
        theme === 'light' ?
        <div className='w-full h-full flex justify-center'> 
          <img className="w-[110px] h-[110px] z-20 m-auto rotate-counterclockwise" src="./icons/ComingSoonIconWordLight.svg" alt="Comming Soon Word"/>
          <img className='absolute top-0 left-0 w-full h-full' src="./icons/ComingSoonIconBackgroundDark.svg" alt="Coming Soon Background"/>
        </div>
        :
        <div className='w-full h-full flex justify-center'> 
          <img className="w-[110px] h-[110px] z-20 m-auto rotate-counterclockwise" src="./icons/ComingSoonIconWordDark.svg" alt="Comming Soon Word"/>
          <img className='absolute top-0 left-0 w-full h-full' src="./icons/ComingSoonIconBackgroundLight.svg" alt="Coming Soon Background"/>
        </div>
      }
    </>
	);
};

export { ComingSoonSvg };
