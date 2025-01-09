import Nav from "@/components/Nav/Nav";
import Aside from "@/components/Aside/Aside";

import searchIcon from "../../public/images/searchIcon.png";
import verticalStroke from "../../public/images/Vector 11.png";
import Image from "next/image";

import cyclistIcon from "../../public/images/Group 144.png";
import yogaIcon from "../../public/images/Group 126.png";
import skaterIcon from "../../public/images/Group 127.png";

import doubleDots from "../../public/images/Group 77.png";

import FriendsRank from "@/components/Friends Rank/FriendsRank";

const sportsContents = [
	{
		img: cyclistIcon,
		header: "Real Wild Cyclist",
		description: "We are the wildest cyclist.",
	},
	{
		img: yogaIcon,
		header: "Yoga Forces",
		description: "Welcome to the biggest...",
	},
	{
		img: skaterIcon,
		header: "Skater Boys",
		description: "The best states of skaters.",
	},
];

export default function Home() {
	return (
		<main className="flex h-screen">
			<Nav />
			<section className="relative w-[55.63%] pt-[42px] px-[40px]">
				<div className="flex items-center justify-between bg-[#f7fafc]">
					<div className="">
						<h1 className="text-[#0F3F62] text-[24px] font-bold">
							Hey, Dustin!
						</h1>
						<p className="text-[14px] font-[400] text-[#8695A0]">
							Welcome back, nice to see you again!
						</p>
					</div>
					<div className="w-[320px] p-[10px] flex items-center gap-4 bg-white rounded-[20px]">
						<Image src={searchIcon} alt="" />
						<input
							className="outline-none placeholder:text-[14px]"
							type="text"
							placeholder="Search here"
						/>
					</div>
				</div>
				<section className="">
					<div className="flex items-center justify-between mt-[40px]">
						{sportsContents.map((sport) => (
							<div className="w-[226px] h-[300px] flex flex-col items-center gap-4 rounded-[20px] bg-white">
								<div className="flex items-center justify-center w-full h-full bg-[#E0F3F3] rounded-b rounded-[20px]">
									<Image src={sport.img} alt="" />
								</div>
								<div className="flex flex-col items-center gap-2 pb-5">
									<h1 className="text-[16px] text-[#0F3F62] font-bold">
										{sport.header}
									</h1>
									<span className="text-[#8695A0] text-[14px]">
										{sport.description}
									</span>
								</div>
							</div>
						))}
					</div>
					<div className="w-full h-[390px] flex flex-col items-center mt-[30px] bg-white rounded-[20px] p-[20px]">
						<div className="w-full flex items-center justify-between p-[10px]">
							<h1 className="text-[#0F3F62] text-[16px] font-bold">Friends</h1>
							<Image src={doubleDots} alt="" />
						</div>
						<FriendsRank />
					</div>
				</section>
			</section>
			<div className="flex items-center">
				<Image className="" src={verticalStroke} alt="" />
			</div>
			<Aside />
		</main>
	);
}
