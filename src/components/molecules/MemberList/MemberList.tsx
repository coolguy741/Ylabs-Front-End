import Member, {TMember} from "../../atoms/Member/Member";

const MemberList = ({membersData}:{membersData: TMember[]}) => {
	return (
		<div className="flex flex-wrap justify-between">
      {
				membersData.map((member) => {
					return <Member image={member.image} name={member.name} description={member.description}/>
				})
			}
    </div>
	);
};

export default MemberList;
