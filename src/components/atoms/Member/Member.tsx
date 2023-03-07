import Hr from '../Hr/Hr';
export type TMember = {
	image: string;
	imageHover: string;
	name: string;
	description: string;
}

const Member = ({image, name, description, imageHover}: TMember) => {
	return (
		<div className="flex-col w-1/4">
			<div className="group w-full bg-red-500">
					<img className="group-hover:hidden w-full" src={image} alt={name} />
					<img className="hidden group-hover:flex w-full" src={imageHover} alt={name} />
			</div>
			<h3 className="mt-[26px]">
				{name}
			</h3>
			<Hr className='mt-[4px]'/>
			<p className="font-s2 mt-[33px]">
				{description}			
			</p>
    </div>
	);
};

export default Member;
