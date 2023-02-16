const Hr = ({className}:{
	className: string
}) => {
	return (
		<hr className={`${className} border-none h-[2px] bg-black`}/>
	);
};

export default Hr;
