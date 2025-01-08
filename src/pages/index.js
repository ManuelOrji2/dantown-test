import Nav from "@/components/Nav/Nav";
import Aside from "@/components/Aside/Aside";

import searchIcon from "../../public/images/searchIcon.png";
import verticalStroke from "../../public/images/Vector 11.png";
import Image from "next/image";

import cyclistIcon from "../../public/images/Group 144.png";
import yogaIcon from "../../public/images/Group 126.png";
import skaterIcon from "../../public/images/Group 127.png";

import doubleDots from "../../public/images/Group 77.png";

import numberOneIcon from "../../public/images/Group 62.png";
import mamCircleIcon from "../../public/images/Mask Group.png";
import crownIcon from "../../public/images/Group 131.png";
import skaterCircleIcon from "../../public/images/Ellipse 5.png";

import AriaCircleIcon from "../../public/images/Mask Group (1).png";
import cyclistCircleIcon from "../../public/images/Ellipse 5 (1).png";

import trentCircleIcon from "../../public/images/Mask Group (2).png";
import skater2CircleIcon from "../../public/images/Ellipse 5 (2).png";

import shakiraCircleIcon from "../../public/images/Mask Group (3).png";
import yogaCircleIcon from "../../public/images/Ellipse 5 (3).png";

import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from "@nextui-org/react";

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
		<main className="flex">
			<Nav />
			<section className="w-[55.63%] pt-[42px]  px-[40px]">
				<div className="flex items-center justify-between">
					<div>
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
				<div className="w-full h-[390px] flex flex-col items-center mt-[30px] bg-white rounded-[20px] p-[24px]">
					<div className="w-full flex items-center justify-between p-[10px]">
						<h1 className="text-[#0F3F62] text-[16px] font-bold">Friends</h1>
						<Image src={doubleDots} alt="" />
					</div>
					<Table
						css={{
							borderCollapse: "separate",
							borderSpacing: "30px 0",
							gap: "40px", // Adds gap between rows
						}}
					>
						<TableHeader>
							<TableColumn className="text-[#8695A0] text-[14px] font-medium">
								Rank
							</TableColumn>
							<TableColumn className="text-[#8695A0] text-[14px] font-medium">
								Name
							</TableColumn>
							<TableColumn className="text-[#8695A0] text-[14px] font-medium">
								Category
							</TableColumn>
							<TableColumn className="text-[#8695A0] text-[14px] font-medium">
								Points
							</TableColumn>
						</TableHeader>
						<TableBody>
							<TableRow className="border-spacing-4" key="1">
								<TableCell>
									<div className="flex items-center">
										<Image src={numberOneIcon} alt="" />
									</div>
								</TableCell>
								<TableCell className="flex items-center gap-5">
									<div className="flex items-center gap-4">
										<Image src={mamCircleIcon} />
										<span className="text-[16px] text-[#0F3F62] font-bold">
											Mamang Ironmen
										</span>
									</div>
									<Image src={crownIcon} />
								</TableCell>
								<TableCell>
									<div className="w-[102px] bg-[] flex items-center gap-2">
										<Image src={skaterCircleIcon} alt="" />
										<span className="text-[14px] text-[#0F3F62]">Skaters</span>
									</div>
								</TableCell>
								<TableCell className="text-[16px] text-[#0F3F62]">
									2.140
								</TableCell>
							</TableRow>
							<TableRow key="2">
								<TableCell>
									<span className="text-center px-[9px]">2</span>
								</TableCell>
								<TableCell className="flex items-center gap-5">
									<div className="flex items-center gap-4">
										<Image src={AriaCircleIcon} />
										<span className="text-[16px] text-[#0F3F62] font-bold">
											Ariana Grande
										</span>
									</div>
								</TableCell>
								<TableCell>
									<div className="w-[102px] bg-[] flex items-center gap-2">
										<Image src={cyclistCircleIcon} alt="" />
										<span className="text-[14px] text-[#0F3F62]">Cyclist</span>
									</div>
								</TableCell>
								<TableCell className="text-[16px] text-[#0F3F62]">
									1.814
								</TableCell>
							</TableRow>
							<TableRow key="3">
								<TableCell>
									<span className="text-center px-[9px]">3</span>
								</TableCell>
								<TableCell className="flex items-center gap-5">
									<div className="flex items-center gap-4">
										<Image src={trentCircleIcon} />
										<span className="text-[16px] text-[#0F3F62] font-bold">
											Trent Alexander Arnold
										</span>
									</div>
								</TableCell>
								<TableCell>
									<div className="w-[102px] bg-[] flex items-center gap-2">
										<Image src={skater2CircleIcon} alt="" />
										<span className="text-[14px] text-[#0F3F62]">Skaters</span>
									</div>
								</TableCell>
								<TableCell className="text-[16px] text-[#0F3F62]">
									1.620
								</TableCell>
							</TableRow>
							<TableRow key="4">
								<TableCell>
									<span className="text-center px-[9px]">4</span>
								</TableCell>
								<TableCell className="flex items-center gap-5">
									<div className="flex items-center gap-4">
										<Image src={shakiraCircleIcon} />
										<span className="text-[16px] text-[#0F3F62] font-bold">
											Shakira Wakawaka
										</span>
									</div>
								</TableCell>
								<TableCell>
									<div className="w-[102px] bg-[] flex items-center gap-2">
										<Image src={yogaCircleIcon} alt="" />
										<span className="text-[14px] text-[#0F3F62]">Yoga</span>
									</div>
								</TableCell>
								<TableCell className="text-[16px] text-[#0F3F62]">
									1.280
								</TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</div>
			</section>
			<div className="flex items-center">
				<Image className="" src={verticalStroke} alt="" />
			</div>
			<Aside />
		</main>
	);
}
