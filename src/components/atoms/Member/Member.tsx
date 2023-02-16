export type TMember = {
	image: string;
	name: string;
	description: string;
}

const Member = ({image, name, description}: TMember) => {
	return (
		<div className="flex-col max-w-[315px]">
      <img src={image} alt={name} />
			<h3 className="mt-[26px]">
				{name}
			</h3>
			<hr className='border-none h-[2px] bg-black mt-[4px]'/>
			<p className="font-s2 mt-[33px]">
				{description}			
			</p>
    </div>
	);
};

export default Member;