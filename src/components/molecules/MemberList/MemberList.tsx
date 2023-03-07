import Member, {TMember} from "../../atoms/Member/Member";

const MemberList = ({membersData}:{membersData: TMember[]}) => {
	return (
		<div className="flex flex-wrap justify-between gap-y-20">
      {
				membersData.map((member) => {
					return <Member image={member.image} name={member.name} description={member.description} imageHover={member.imageHover}/>
				})
			}
    </div>
	);
};

export default MemberList;
