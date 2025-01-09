import {
	Table,
	TableHeader,
	TableColumn,
	TableBody,
	TableRow,
	TableCell,
} from "@nextui-org/react";

import Image from "next/image";

import numberOneIcon from "../../../public/images/Group 62.png";
import mamCircleIcon from "../../../public/images/Mask Group.png";
import crownIcon from "../../../public/images/Group 131.png";
import skaterCircleIcon from "../../../public/images/Ellipse 5.png";

import AriaCircleIcon from "../../../public/images/Mask Group (1).png";
import cyclistCircleIcon from "../../../public/images/Ellipse 5 (1).png";

import trentCircleIcon from "../../../public/images/Mask Group (2).png";
import skater2CircleIcon from "../../../public/images/Ellipse 5 (2).png";

import shakiraCircleIcon from "../../../public/images/Mask Group (3).png";
import yogaCircleIcon from "../../../public/images/Ellipse 5 (3).png";

const FriendsRank = () => {
	return (
		<section className="w-full">
			<Table
				style={{
					borderCollapse: "separate",
					borderSpacing: "0 8px ",
					// Adds gap between rows
				}}
			>
				<TableHeader>
					<TableColumn className="text-[#8695A0] text-[14px] text-left font-medium">
						Rank
					</TableColumn>
					<TableColumn className="text-[#8695A0] text-[14px] text-left font-medium">
						Name
					</TableColumn>
					<TableColumn className="text-[#8695A0] text-[14px] text-left font-medium">
						Category
					</TableColumn>
					<TableColumn className="text-[#8695A0] text-[14px] text-left font-medium">
						Points
					</TableColumn>
				</TableHeader>
				<TableBody className="flex items-center justify-center">
					<TableRow className="" key="1">
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
							<div className="w-[102px] bg-[#E7F7F8] py-[5px] px-[10px] rounded-[20px] flex items-center justify-center gap-2">
								<Image src={skaterCircleIcon} alt="" />
								<span className="text-[14px] text-[#0F3F62]">Skaters</span>
							</div>
						</TableCell>
						<TableCell className="text-[16px] text-[#0F3F62]">2.140</TableCell>
					</TableRow>
					<TableRow key="2">
						<TableCell>
							<span className="text-center px-[9px]">2</span>
						</TableCell>
						<TableCell className="flex items-center gap-5  border-t border-[#D6DCE0] ">
							<div className="flex items-center gap-4">
								<Image src={AriaCircleIcon} />
								<span className="text-[16px] text-[#0F3F62] font-bold">
									Ariana Grande
								</span>
							</div>
						</TableCell>
						<TableCell className=" border-t border-[#D6DCE0] ">
							<div className="w-[102px] bg-[#DAFDFF] py-[5px] px-[10px] rounded-[20px] flex items-center justify-center gap-2">
								<Image src={cyclistCircleIcon} alt="" />
								<span className="text-[14px] text-[#0F3F62]">Cyclist</span>
							</div>
						</TableCell>
						<TableCell className="text-[16px] text-[#0F3F62]  border-t border-[#D6DCE0] ">
							1.814
						</TableCell>
					</TableRow>
					<TableRow key="3">
						<TableCell>
							<span className="text-center px-[9px]">3</span>
						</TableCell>
						<TableCell className="flex items-center gap-5  border-t border-[#D6DCE0] ">
							<div className="flex items-center gap-4">
								<Image src={trentCircleIcon} />
								<span className="text-[16px] text-[#0F3F62] font-bold">
									Trent Alexander Arnold
								</span>
							</div>
						</TableCell>
						<TableCell className=" border-t border-[#D6DCE0] ">
							<div className="w-[102px] bg-[#E7F7F8] py-[5px] px-[10px] rounded-[20px] flex items-center justify-center gap-2">
								<Image src={skater2CircleIcon} alt="" />
								<span className="text-[14px] text-[#0F3F62]">Skaters</span>
							</div>
						</TableCell>
						<TableCell className="text-[16px] text-[#0F3F62]  border-t border-[#D6DCE0] ">
							1.620
						</TableCell>
					</TableRow>
					<TableRow key="4">
						<TableCell>
							<span className="text-center px-[9px]">4</span>
						</TableCell>
						<TableCell className="flex items-center gap-5  border-t border-[#D6DCE0] ">
							<div className="flex items-center gap-4">
								<Image src={shakiraCircleIcon} />
								<span className="text-[16px] text-[#0F3F62] font-bold">
									Shakira Wakawaka
								</span>
							</div>
						</TableCell>
						<TableCell className=" border-t border-[#D6DCE0] ">
							<div className="w-[102px] bg-[#FFECE8] py-[5px] px-[10px] rounded-[20px] flex items-center justify-center gap-2">
								<Image src={yogaCircleIcon} alt="" />
								<span className="text-[14px] text-[#0F3F62]">Yoga</span>
							</div>
						</TableCell>
						<TableCell className=" border-t border-[#D6DCE0]  text-[16px] text-[#0F3F62]">
							1.280
						</TableCell>
					</TableRow>
				</TableBody>
			</Table>
		</section>
	);
};

export default FriendsRank;
