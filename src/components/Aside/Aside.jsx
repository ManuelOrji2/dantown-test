import mailIcon from "../../../public/images/mail.png";
import notificationIcon from "../../../public/images/Group 46.png";
import rainbowIcon from "../../../public/images/img.png";
import dropdownIcon from "../../../public/images/Vector 20.png";

import skyBlueCircleIcon from "../../../public/images/Mask Group.png";
import pinkCircleIcon from "../../../public/images/Mask Group (1).png";
import blueCircleIcon from "../../../public/images/Mask Group (2).png";
import pink2CircleIcon from "../../../public/images/Mask Group (3).png";

import bottonBorder from "../../../public/images/Vector 1.png";

import Modal from "@/components/Modal/Modal";

import Image from "next/image";

const chatsInfo = [
	{
		img: skyBlueCircleIcon,
		name: "Ironmen",
		chatText: "When will the event be held?",
		border: bottonBorder,
	},

	{
		img: pinkCircleIcon,
		name: "Ariana Grande",
		chatText: "Alright then. See you there",
		border: bottonBorder,
	},
	{
		img: blueCircleIcon,
		name: "Ariana Grande",
		chatText: "Come on join to my party!",
		border: bottonBorder,
	},
	{
		img: pink2CircleIcon,
		name: "Ariana Grande",
		chatText: "After that you can see me",
		border: "",
	},
];

const Aside = () => {
	return (
		<section className="w-[27.82%] p-[42px] flex flex-col gap-[40px]">
			<div className="w-full flex items-center justify-around gap-[24px]">
				<div className="flex items-center gap-5">
					<Image className="cursor-pointer" src={mailIcon} alt="" />
					<Image className="cursor-pointer" src={notificationIcon} alt="" />
				</div>
				<div className="flex gap-[10px] items-center">
					<Image src={rainbowIcon} alt="" />
					<h1 className="text-[#0F3F62] text-[16px] font-bold">Jamet Roy</h1>
					<Image className="cursor-pointer" src={dropdownIcon} alt="" />
				</div>
			</div>
			<div className="flex flex-col gap-[22px]">
				<div className="flex gap-5">
					<h1 className="text-[#0F3F62] text-[18px] font-bold">Chats</h1>
					<div className="bg-[#E0F3F3] rounded-[20px] w-[37px] h-[26px] py-[4px] px-[10px] flex items-center justify-center">
						<span className="text-[13px] text-[#54BCBD]">14</span>
					</div>
				</div>
				<div className="flex flex-col gap-[20px]">
					<div className="flex flex-col gap-[20px]">
						{chatsInfo.map((info) => (
							<div key={info.name}>
								<div className="flex items-center gap-3 cursor-pointer">
									<div>
										<Image width={56} src={info.img} alt="" />
									</div>
									<div>
										<div className="flex flex-col  gap-[2px] py-3">
											<h1 className="text-[16px] text-[#0F3F62] font-bold">
												{info.name}
											</h1>
											<span className="text-[14px] text-[#8695A0]">
												{info.chatText}
											</span>
										</div>
										<div>
											<Image src={info.border} alt="" />
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
					<Modal />
				</div>
			</div>
		</section>
	);
};

export default Aside;
