import mailIcon from "../../../public/images/mail.png";
import notificationIcon from "../../../public/images/Group 46.png";
import rainbowIcon from "../../../public/images/img.png";
import dropdownIcon from "../../../public/images/Vector 20.png";

import Image from "next/image";

const Aside = () => {
	return (
		<section className="w-[27.82%] p-[42px] flex flex-col items-center">
			<div className="w-full flex items-center gap-[34px]">
				<div className="flex items-center gap-5">
					<Image src={mailIcon} alt="" />
					<Image src={notificationIcon} alt="" />
				</div>
				<div className="flex gap-[10px] items-center">
					<Image src={rainbowIcon} alt="" />
					<h1 className="text-[#0F3F62] text-[16px] font-bold">Jamet Roy</h1>
					<Image src={dropdownIcon} alt="" />
				</div>
			</div>
		</section>
	);
};

export default Aside;
